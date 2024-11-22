
import { IsString,IsDate, } from "class-validator";
import { UUID } from "typeorm/driver/mongodb/bson.typings";
export class CreateMessageDto{
    @IsString()
    message:string
    @IsDate()
    timestamp:Date
    @IsString()
    senderId:UUID
    

}

