import { IsEmail,IsString } from "class-validator"

export class UpdateUserDto{
    @IsString()
    username:string
    @IsEmail()
    email:string

    @IsString()
    password:string

    @IsString()
    role:string
    @IsString()
    name:string
}