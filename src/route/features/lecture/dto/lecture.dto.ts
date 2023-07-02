import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType('Lecture')
export class LectureDto {
  @Field(() => String)
  _id: string;

  @Field(() => ID)
  id: string;

  @Field(() => ID)
  id_course: string;

  @Field(() => String)
  id_chapter: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  url_video: string;

  @Field(() => [ID])
  id_comment: string[];
}
