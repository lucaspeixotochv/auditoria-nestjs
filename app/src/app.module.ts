import { Module } from '@nestjs/common';
import { BankSlipModule } from './modules/bank-slip/bank-slip.module';
import { AuditModule } from './modules/audit/audit.module';

@Module({
  imports: [BankSlipModule, AuditModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
