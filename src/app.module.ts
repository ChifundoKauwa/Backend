import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatGateway } from './chat/chat.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormconfig } from 'TypeormConfig';
import { HostelModule } from './Hostel/hostel.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { messageModule } from './message/message.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './Roles/roles.guard';

@Module({
  imports: [TypeOrmModule.forRoot(typeormconfig),
    HostelModule,UserModule,AuthModule,messageModule
  ],
  controllers: [AppController],
  providers: [AppService, ChatGateway,{
    provide: APP_GUARD,
    useClass:RolesGuard,
  }],
})
export class AppModule {}
