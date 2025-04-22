import { Type } from 'class-transformer';
import { IsEmail, IsString, Length } from 'class-validator';
import { Role } from 'src/common/enums/role.enum';

export class CreateUserDto {
  @Length(1, 20)
  name: string;

  @IsString()
  password: string;

  @IsEmail()
  @Length(1, 40)
  email: string;

  @Type(() => Number)
  role: Role;
}
