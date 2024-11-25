
import { IsString,IsDate,IsOptional } from "class-validator";
export class UpdateMessageDto{
    @IsString()
    message:string
    @IsDate()
    timestamp:Date
    @IsOptional()
    @IsString()
    content?:string
}