import { Field, ID, InputType } from '@nestjs/graphql';
import { IsOptional, IsUUID } from 'class-validator';

@InputType()
export class updateCourseDto {
  @IsOptional()
  @Field(() => String)
  title: string;

  @IsOptional()
  @Field(() => String)
  description: string;

  @IsUUID(4, { each: true })
  @IsOptional()
  @Field(() => [ID])
  categories: string[];

  @IsOptional()
  @Field(() => Number)
  totalChapter: number;

  @IsOptional()
  @Field(() => Number)
  totalLecture: number;

  @IsOptional()
  @Field(() => String)
  price: string;

  @IsOptional()
  @Field(() => String)
  thumbnail: string;

  @IsOptional()
  @Field(() => Number)
  totalView: number;

  @IsOptional()
  @Field(() => Number)
  totalLike: number;

  @IsOptional()
  @Field(() => Boolean)
  isPrivate: boolean;
}
