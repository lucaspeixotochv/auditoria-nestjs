import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Audit } from './audit.entity';
import { Queues, QueuesService } from '../../shared/enums/queues.enum';

@Injectable()
export class AuditService {
  constructor(@Inject(QueuesService.AUDIT) private client: ClientProxy) {}

  publish(data: Audit) {
    this.client.emit({ cmd: Queues.AUDIT }, data);
  }
}
