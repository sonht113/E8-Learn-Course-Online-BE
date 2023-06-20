import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('User')
export class UserDto {
  @Field(() => ID)
  id: string;

  @Field()
  username: string;

  @Field()
  password: string;

  @Field()
  email: string;

  @Field()
  fullname: string;

  @Field()
  phone: string;

  @Field()
  role: string;

  @Field(() => [String])
  myFavoriteCourses: string[];

  @Field(() => [String])
  myLearningCourses: string[];

  @Field(() => [String])
  myCourses: string[];

  @Field(() => [String])
  myBlogs: string[];

  @Field(() => [String])
  myFavoriteBlogs: string[];
}
