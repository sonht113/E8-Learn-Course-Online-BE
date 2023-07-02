import { Field, ID, ObjectType } from '@nestjs/graphql';
import { UserDto } from '../../user/dto/user.dto';

@ObjectType()
export class CommentDto {
  @Field(() => String)
  _id: string;

  @Field(() => ID)
  id: string;

  @Field(() => ID)
  idLecture: string;

  @Field(() => UserDto)
  userCreated: string;

  @Field(() => String)
  content: string;

  @Field(() => [UserDto])
  userLiked: string[];
}
