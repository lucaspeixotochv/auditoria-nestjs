import { Injectable } from '@nestjs/common';
import { CreateBankSlipDto } from './dto/create-bank-slip.dto';
import { UpdateBankSlipDto } from './dto/update-bank-slip.dto';
import { PrismaService } from '../../shared/prisma/prisma.service';

@Injectable()
export class BankSlipService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createBankSlipDto: CreateBankSlipDto) {
    return await this.prismaService.bankSlip.create({
      data: createBankSlipDto,
    });
  }

  async findAll() {
    return await this.prismaService.bankSlip.findMany();
  }

  async findOne(id: string) {
    return await this.prismaService.bankSlip.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateBankSlipDto: UpdateBankSlipDto) {
    return await this.prismaService.bankSlip.update({
      where: { id },
      data: updateBankSlipDto,
    });
  }

  async remove(id: string) {
    return await this.prismaService.bankSlip.delete({
      where: { id },
    });
  }
}
