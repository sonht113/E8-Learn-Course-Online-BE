import { InputType } from '@nestjs/graphql';
import { CreateUserDto } from 'src/route/features/user/dto/create-user.dto';

@InputType()
export class SignUpUserInputDto extends CreateUserDto {}
