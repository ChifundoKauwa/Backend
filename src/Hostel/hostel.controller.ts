import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { HostelService } from './hostel.service';
import { hostel } from './hostel.entity';
import { CreateHostelDto } from './dtos/CreateHostel.dto';
import { Roles } from 'src/Roles/roles.decorator';
import { RolesGuard } from 'src/Roles/roles.guard';

@Controller('hostels')
export class HostelController {
  constructor(private hostelService: HostelService) {}

  @Post('landlord')
  
  @UseGuards(RolesGuard)
  async create(@Body() createHostelDto: CreateHostelDto) {
    return this.hostelService.create(createHostelDto);
  }

  // Search for a hostel by title
  @Post('landlord')
  @Roles('LandLord')
  @UseGuards(RolesGuard)
  @Get('search')
  async search(@Query('title') title: string): Promise<hostel> {
    return this.hostelService.findOne(title);
  }

  // Delete a user by ID
  @Delete(':id')
  @Post('landlord')
  @Roles('LandLord')
  @UseGuards(RolesGuard)
  async remove(@Param('id') id: number): Promise<void> {
    await this.hostelService.remove(id);
  }
}
