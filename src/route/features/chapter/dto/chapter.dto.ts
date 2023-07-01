import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Chapter')
export class ChapterDto {
  @Field(() => String)
  _id: string;

  @Field(() => ID)
  id: string;

  @Field(() => ID)
  course: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  description: string;
}
