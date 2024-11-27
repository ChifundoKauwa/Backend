import { Body, Controller, Delete, Param, Post,Get } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/CreateUser.dto';
import { user } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }

  @Get()

 async findAll():Promise<user[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne('id');
  }

  // Delete a user by ID
  @Delete('id')
  async remove(@Param('id') id: number): Promise<void> {
    await this.userService.remove(id);
  }
}
