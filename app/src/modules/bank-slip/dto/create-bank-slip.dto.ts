import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
} from 'class-validator';
export class CreateBankSlipDto {
  @IsDateString()
  @IsNotEmpty()
  dueDate: Date;

  @IsNotEmpty()
  @IsNumber()
  value: number;

  @IsNotEmpty()
  @IsEnum(['PENDING', 'PAID', 'CANCELED'])
  status: 'PENDING' | 'PAID' | 'CANCELLED';

  @IsOptional()
  @IsDateString()
  paymentDate?: Date;
}
