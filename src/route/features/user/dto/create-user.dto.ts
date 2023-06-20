import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class CreateUserDto {
  @IsNotEmpty()
  @Field()
  username: string;

  @IsNotEmpty()
  @Field()
  password: string;

  @IsOptional()
  @IsEmail()
  @Field(() => String, { defaultValue: '' })
  email: string;

  @IsNotEmpty()
  @Field()
  fullname: string;

  @IsOptional()
  @Field(() => String, { defaultValue: '' })
  description: string;

  @IsOptional()
  @Field(() => String, { defaultValue: '' })
  avatar: string;

  @IsOptional()
  @Field(() => String, { defaultValue: '' })
  phone: string;

  @IsOptional()
  @Field(() => String, { defaultValue: 'customer' })
  role: string;

  @IsOptional()
  @Field(() => [String], { defaultValue: [] })
  myFavoriteCourses: string[];

  @IsOptional()
  @Field(() => [String], { defaultValue: [] })
  myLearningCourses: string[];

  @IsOptional()
  @Field(() => [String], { defaultValue: [] })
  myCourses: string[];

  @IsOptional()
  @Field(() => [String], { defaultValue: [] })
  myBlogs: string[];

  @IsOptional()
  @Field(() => [String], { defaultValue: [] })
  myFavoriteBlogs: string[];
}
