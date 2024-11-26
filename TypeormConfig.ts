import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { message } from "src/message/message.entity";
import { user } from "src/user/user.entity";
import { hostel } from "src/Hostel/hostel.entity";




export const typeormconfig:TypeOrmModuleOptions={
    type:'mysql',
    host:'sql3.freemysqlhosting.net',
    port:3306,
    username:'sql3747710',
    password:'YMmm1RwhhT',
    database:'sql3747710',
    entities:[message,user,hostel],
    synchronize:false,
    
}