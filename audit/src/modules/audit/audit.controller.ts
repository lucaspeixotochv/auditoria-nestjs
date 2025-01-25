import { Controller, Get, Post, Body } from '@nestjs/common';
import { AuditService } from './audit.service';
import { CreateAuditDto } from './dto/create-audit.dto';
import { Audit } from './entities/audit.entity';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { Queues } from '../../shared/enums/queues.enum';

@Controller('audit')
export class AuditController {
  constructor(private readonly auditService: AuditService) {}

  @Post()
  create(@Body() createAuditDto: CreateAuditDto): Promise<Audit> {
    return this.auditService.create(createAuditDto);
  }

  @Get()
  findAll(): Promise<Audit[]> {
    return this.auditService.findAll();
  }

  @EventPattern({ cmd: Queues.AUDIT })
  getNotifications(
    @Payload() data: CreateAuditDto,
    @Ctx() context: RmqContext,
  ) {
    try {
      // const channel = context.getChannelRef();
      // const originalMsg = context.getMessage();
      this.auditService.create(data);

      // channel.ack(originalMsg);
    } catch (error) {
      console.log(error);
    }
  }
}
