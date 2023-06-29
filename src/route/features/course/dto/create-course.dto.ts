import { Field, ID, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsUUID } from 'class-validator';

@InputType()
export class CreateCourseInputDto {
  @IsNotEmpty()
  @Field(() => [String])
  categories: string[];

  @IsNotEmpty()
  @Field()
  title: string;

  @IsOptional()
  @Field(() => Number, { defaultValue: 0 })
  totalChapter: number;

  @IsOptional()
  @Field(() => Number, { defaultValue: 0 })
  totalLecture: number;

  @IsNotEmpty()
  @Field()
  description: string;

  @IsOptional()
  @Field(() => String, { defaultValue: '0' })
  price: string;

  @IsNotEmpty()
  @Field()
  thumbnail: string;

  @IsOptional()
  @Field(() => Number, { defaultValue: 0 })
  totalView: number;

  @IsOptional()
  @Field(() => Number, { defaultValue: 0 })
  totalLike: number;

  @IsOptional()
  @Field(() => Number, { defaultValue: 0 })
  totalDislike: number;

  @IsNotEmpty()
  @Field(() => [String])
  tags: string[];

  @IsNotEmpty()
  @Field()
  isPrivate: boolean;

  @IsUUID(4, { each: true })
  @IsOptional()
  @Field(() => [ID], { defaultValue: [] })
  usersJoined: string[];

  @IsUUID(4, { each: true })
  @IsOptional()
  @Field(() => ID, { defaultValue: '' })
  userCreated: string;
}
