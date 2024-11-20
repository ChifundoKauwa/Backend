import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import {message} from './entities/message.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([message])],
  controllers: [MessageController],
  providers: [MessageService],
  exports:[MessageService]
})
export class messageModule {}
