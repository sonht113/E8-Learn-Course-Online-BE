import { Field, ID, InputType } from '@nestjs/graphql';
import { IsOptional, IsUUID } from 'class-validator';

@InputType()
export class UpdateCourseInputDto {
  @IsOptional()
  @Field()
  title: string;

  @IsOptional()
  @Field(() => Number, { defaultValue: 0 })
  totalChapter: number;

  @IsOptional()
  @Field(() => Number, { defaultValue: 0 })
  totalLecture: number;

  @IsOptional()
  @Field()
  description?: string;

  @IsOptional()
  @Field(() => String, { defaultValue: '0' })
  price: string;

  @IsOptional()
  @Field()
  thumbnail?: string;

  @IsOptional()
  @Field(() => Number, { defaultValue: 0 })
  totalView: number;

  @IsOptional()
  @Field(() => Number, { defaultValue: 0 })
  totalLike: number;

  @IsOptional()
  @Field(() => Number, { defaultValue: 0 })
  totalDislike: number;

  @IsOptional()
  @Field()
  isPrivate?: boolean;

  @IsOptional()
  @Field(() => [String], { defaultValue: [] })
  usersJoined: string[];

  @IsOptional()
  @Field(() => String, { defaultValue: '' })
  userCreated: string;
}
