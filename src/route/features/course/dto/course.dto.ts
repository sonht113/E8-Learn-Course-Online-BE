import { Field, ID, ObjectType } from '@nestjs/graphql';
import { UserDto } from '../../user/dto/user.dto';

@ObjectType('Course')
export class CourseDto {
  @Field(() => ID)
  id: string;

  @Field(() => [String])
  categories: string[];

  @Field()
  title: string;

  @Field()
  totalChapter: number;

  @Field()
  totalLecture: number;

  @Field()
  description: string;

  @Field()
  isFree: boolean;

  @Field()
  price: string;

  @Field()
  thumbnail: string;

  @Field()
  totalView: number;

  @Field()
  totalLike: number;

  @Field()
  totalDislike: number;

  @Field(() => [String])
  tags: string[];

  @Field()
  isPrivate: boolean;

  @Field(() => [UserDto])
  usersJoined: string[];

  @Field(() => UserDto)
  userCreated: string;
}
