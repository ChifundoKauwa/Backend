import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import { message } from './entities/message.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatGateway } from 'src/chat/chat.gateway';

@Module({
  imports:[TypeOrmModule.forFeature([message])],
  controllers: [MessageController],
  providers: [MessageService,ChatGateway],
  exports:[MessageService]
})
export class messageModule {}