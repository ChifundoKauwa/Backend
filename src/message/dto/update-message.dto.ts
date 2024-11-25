import { IsString,IsDate } from "class-validator";
export class UpdateMessageDto{
    @IsString()
    message:string
    @IsDate()
    timestamp:Date
}