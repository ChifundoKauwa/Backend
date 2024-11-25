import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/CreateUser.dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }

  // Delete a user by ID
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    await this.userService.remove(id);
  }
}
