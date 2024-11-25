import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { user } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/CreateUser.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(user)
    private readonly userRepository: Repository<user>,
  ) {}
  async create(createUserDto: CreateUserDto): Promise<user> {
    const { password } = createUserDto;

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10); // 10 salt rounds

    const user = this.userRepository.create({
      ...createUserDto,
      password: hashedPassword, // Save hashed password
    });

    return this.userRepository.save(user);
  }

  // Find hostel by title
  async findOne(query: string): Promise<user> {
    return this.userRepository.findOne({
      where: [{ username: query }],
    });
  }

  // Delete a hostel by ID
  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
