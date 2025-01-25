import { Module } from '@nestjs/common';
import { BankSlipService } from './bank-slip.service';
import { BankSlipController } from './bank-slip.controller';
import { PrismaService } from '../../shared/prisma/prisma.service';
import { AuditModule } from '../audit/audit.module';

@Module({
  imports: [AuditModule],
  controllers: [BankSlipController],
  providers: [BankSlipService, PrismaService],
})
export class BankSlipModule {}
