import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { message} from "src/message/entities/message.entity";

export const typeormconfig:TypeOrmModuleOptions={
    type:'mysql',
    host:'localhost',
    port:3306,
    username:'root',
    password:'',
    database:'accomodation',
    entities:[message],
    synchronize:false,
    
}