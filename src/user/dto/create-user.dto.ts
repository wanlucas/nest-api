import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @Length(1, 20)
  name: string;

  @IsString()
  password: string;

  @IsEmail()
  @Length(1, 40)
  email: string;
}
