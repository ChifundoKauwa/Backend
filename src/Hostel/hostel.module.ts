import { Module } from '@nestjs/common';
import { HostelController } from './hostel.controller';
import { HostelService } from './hostel.service';
import { hostel } from './hostel.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([hostel])],
  controllers: [HostelController],
  providers: [HostelService],
})
export class HostelModule {}
