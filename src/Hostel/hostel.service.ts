import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { hostel } from './hostel.entity';
import { Repository } from 'typeorm';
import { CreateHostelDto } from './dtos/CreateHostel.dto';

@Injectable()
export class HostelService {
  constructor(
    @InjectRepository(hostel)
    private readonly hostelRepository: Repository<hostel>,
  ) {}
  async create(createHostelDto: CreateHostelDto) {
    const user = this.hostelRepository.create(createHostelDto);
    return this.hostelRepository.save(user);
  }

  // Find hostel by title
  async findOne(query: string): Promise<hostel> {
    return this.hostelRepository.findOne({
      where: [{ title: query }],
    });
  }

  // Delete a Hostel by ID
  async remove(id: number): Promise<void> {
    await this.hostelRepository.delete(id);
  }
}
