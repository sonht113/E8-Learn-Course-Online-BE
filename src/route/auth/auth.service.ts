import { UserService } from '../features/user/user.service';
import { Injectable } from '@nestjs/common';
import { LoginUserInputDto } from './dto/login-user.input';
import { LoginResponseDto } from './dto/login-response';
import { User } from '../features/user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { SignUpUserInputDto } from './dto/signup-user.input';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.getUserByUsername(username);

    const valid = await bcrypt.compare(password, user?.password);
    if (user && valid) {
      const { password, ...result } = user;

      return result;
    }
    return null;
  }

  async login(loginUserInput: LoginUserInputDto): Promise<LoginResponseDto> {
    const user = await this.userService.getUserByUsername(
      loginUserInput.username,
    );

    const { password, ...result } = user;

    return {
      access_token: this.jwtService.sign({
        username: user.username,
        sub: user.id,
      }),
      user: result,
    };
  }

  async signup(signupUserInput: SignUpUserInputDto): Promise<User> {
    const user = await this.userService.getUserByUsername(
      signupUserInput.username,
    );

    if (user) {
      throw new Error('User already exists!');
    }

    const password = await bcrypt.hash(signupUserInput.password, 10);
    return this.userService.createUser({ ...signupUserInput, password });
  }
}
