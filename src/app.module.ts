import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatModule } from './chat/chat.module';
import { typeormconfig } from 'typeOrmConfig';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { HouseModule } from './house/house.module';
//import { UserModule } from './user/user.module';
import { messageModule } from './message/message.module';
import { ChatGateway } from './chat/chat.gateway';



@Module({
  imports: [ChatModule,TypeOrmModule.forRoot(typeormconfig), ChatGateway,messageModule],
  controllers: [AppController],
  providers: [AppService],
  exports:[messageModule],

})
export class AppModule {}
