import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { message } from "src/message/message.entity";
import { user } from "src/user/user.entity";
import { hostel } from "src/Hostel/hostel.entity";

export const typeormconfig:TypeOrmModuleOptions={
    type:'mysql',
    host:process.env.DB_HOST,
    port:3306,
    username:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database:process.env.BD_NAME,
    entities:[message,user,hostel],
    synchronize:true,
    
}