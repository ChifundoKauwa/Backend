import { Module } from '@nestjs/common';
import { ChatGateway } from '../chat/chat.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { message } from 'src/message/message.entity';

@Module({
  imports:[TypeOrmModule.forFeature([message])],
  providers: [ChatGateway]
})
export class ChatModule {}
