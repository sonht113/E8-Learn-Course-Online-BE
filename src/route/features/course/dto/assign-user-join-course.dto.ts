import { Field, ID, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID } from 'class-validator';

@InputType()
export class assignUserToCourseDto {
  @IsUUID(4, { each: true })
  @IsNotEmpty()
  @Field(() => [ID])
  usersJoined: string[];
}
