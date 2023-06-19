import { Field, ObjectType } from '@nestjs/graphql';
import { UserDto } from '../../features/user/dto/user.dto';

@ObjectType('LoginResponse')
export class LoginResponseDto {
  @Field()
  access_token: string;

  @Field(() => UserDto)
  user: Omit<UserDto, 'password'>;
}
