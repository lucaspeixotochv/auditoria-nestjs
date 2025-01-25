import { Module } from '@nestjs/common';
import { AuditService } from './audit.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { Queues, QueuesService } from '../../shared/enums/queues.enum';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: QueuesService.AUDIT,
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: Queues.AUDIT,
          queueOptions: {
            durable: true,
          },
        },
      },
    ]),
  ],
  controllers: [],
  providers: [AuditService],
  exports: [AuditService],
})
export class AuditModule {}
