import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { SignInDto } from './dto/sign-In.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(payload: SignInDto) {
    const user = await this.userService.findByName(payload.name);

    if (user?.password !== payload.password) {
      throw new UnauthorizedException();
    }

    return await this.jwtService.signAsync({
      id: user.id,
      name: user.name,
      role: user.role,
    });
  }
}
