import { IsNotEmpty, IsString,IsUrl } from 'class-validator';
import { NumericType } from 'typeorm';

export class CreateHostelDto {
  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  price: NumericType;

  @IsNotEmpty()
  @IsString()
  location: string;

  @IsNotEmpty()
  @IsString()
  @IsUrl()
  image: string;
}
