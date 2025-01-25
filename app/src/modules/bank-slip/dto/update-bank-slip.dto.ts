import { PartialType } from '@nestjs/mapped-types';
import { CreateBankSlipDto } from './create-bank-slip.dto';

export class UpdateBankSlipDto extends PartialType(CreateBankSlipDto) {}
