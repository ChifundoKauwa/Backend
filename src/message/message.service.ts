import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './Dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { message } from './entities/message.entity';


@Injectable()
export class MessageService {

  constructor(
    @InjectRepository(message)
    private readonly messagesRepository:Repository<message>
  ){}
  create(createMessageDto: CreateMessageDto) {
  
    return  this.messagesRepository.save(createMessageDto);
  }

  findAll() {
    return this.messagesRepository.find();
  }

  findOne(id: number) {
    return this.messagesRepository.findOne({});
  }

  update(id: number, updateMessageDto: UpdateMessageDto) {
    return this.messagesRepository.update(id,{});
  }

  remove(id: number) {
    return this.messagesRepository.delete(id);
  }
}