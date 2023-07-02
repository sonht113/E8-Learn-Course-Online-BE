import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CommentDto {
  @Field(() => String)
  _id: string;

  @Field(() => ID)
  id: string;

  @Field(() => ID)
  user_created: string;

  @Field(() => String)
  content: string;

  @Field(() => [ID])
  user_liked: string[];
}
