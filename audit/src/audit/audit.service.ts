import { Injectable } from '@nestjs/common';
import { CreateAuditDto } from './dto/create-audit.dto';
import { Audit } from './entities/audit.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuditService {
  constructor(@InjectRepository(Audit) private repository: Repository<Audit>) {}

  async create(createAuditDto: CreateAuditDto): Promise<Audit> {
    return await this.repository.save(createAuditDto);
  }

  async findAll(): Promise<Audit[]> {
    return await this.repository.find();
  }
}
