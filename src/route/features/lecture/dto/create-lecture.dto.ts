import { Field, ID, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID } from 'class-validator';

@InputType()
export class CreateLectureInputDto {
  @IsNotEmpty()
  @Field()
  title: string;

  @IsNotEmpty()
  @Field()
  description: string;

  @IsNotEmpty()
  @Field()
  url_video: string;

  @IsNotEmpty()
  @IsUUID(4, { each: true })
  @Field(() => ID)
  id_course: string;

  @IsNotEmpty()
  @IsUUID(4, { each: true })
  @Field(() => ID)
  id_chapter: string;

  @IsNotEmpty()
  @IsUUID(4, { each: true })
  @Field(() => [ID])
  id_comment: string[];
}
