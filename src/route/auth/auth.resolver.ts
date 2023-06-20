import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginResponseDto } from './dto/login-response';
import { LoginUserInputDto } from './dto/login-user.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from './gql-auth.guard';
import { UserDto } from '../features/user/dto/user.dto';
import { SignUpUserInputDto } from './dto/signup-user.input';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => LoginResponseDto)
  @UseGuards(GqlAuthGuard)
  login(
    @Args('loginUserInput')
    loginUserInput: LoginUserInputDto,
  ) {
    return this.authService.login(loginUserInput);
  }

  @Mutation(() => UserDto)
  signup(@Args('signupUserInput') signupUserInput: SignUpUserInputDto) {
    return this.authService.signup(signupUserInput);
  }
}
