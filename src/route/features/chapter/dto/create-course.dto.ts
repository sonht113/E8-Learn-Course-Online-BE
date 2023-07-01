import { Field, ID, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID } from 'class-validator';

@InputType()
export class CreateChapterDto {
  @IsNotEmpty()
  @Field()
  title: string;

  @IsNotEmpty()
  @Field()
  description: string;

  @IsUUID(4, { each: true })
  @IsNotEmpty()
  @Field(() => ID)
  course: string;
}
