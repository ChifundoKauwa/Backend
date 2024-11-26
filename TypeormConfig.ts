import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { message } from "src/message/entities/message.entity";
import { user } from "src/user/user.entity";
import { hostel } from "src/Hostel/hostel.entity";

export const typeormconfig:TypeOrmModuleOptions={
    type:'mysql',
    host:'localhost',
    port:3306,
    username:'root',
    password:'',
    database:'accomodation',
    entities:[message,user,hostel],
    synchronize:true,
    
}