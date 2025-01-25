import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Audit } from '../../modules/audit/audit.entity';
import { AuditService } from '../../modules/audit/audit.service';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor(private auditService: AuditService) {
    super();

    this.$use(async (params, next) => {
      const auditBody: Audit = {
        reference: params.model,
        method: params.action,
        new:
          params.action === 'create' || params.action === 'update'
            ? params.args.data
            : params.args?.where || {},
        old:
          params.action === 'update' || params.action === 'delete'
            ? await this[params.model].findUnique({ where: params.args.where })
            : {},
      };

      this.auditService.publish(auditBody);

      return next(params);
    });
  }

  async onModuleInit() {
    await this.$connect();
  }
}
