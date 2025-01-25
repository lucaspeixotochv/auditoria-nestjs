import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BankSlipService } from './bank-slip.service';
import { CreateBankSlipDto } from './dto/create-bank-slip.dto';
import { UpdateBankSlipDto } from './dto/update-bank-slip.dto';

@Controller('bank-slip')
export class BankSlipController {
  constructor(private readonly bankSlipService: BankSlipService) {}

  @Post()
  create(@Body() createBankSlipDto: CreateBankSlipDto) {
    return this.bankSlipService.create(createBankSlipDto);
  }

  @Get()
  findAll() {
    return this.bankSlipService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bankSlipService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBankSlipDto: UpdateBankSlipDto,
  ) {
    return this.bankSlipService.update(id, updateBankSlipDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bankSlipService.remove(id);
  }
}
