import { IsEmail, Length } from 'class-validator';

export class CreateUserDto {
  @Length(1, 20)
  name: string;

  @IsEmail()
  @Length(1, 40)
  email: string;
}
