import { Field, ObjectType } from '@nestjs/graphql';
import { CourseDto } from './course.dto';

@ObjectType()
export class CoursePaginateDto {
  @Field(() => [CourseDto])
  result: CourseDto[];

  @Field()
  page: number;

  @Field()
  limit: number;

  @Field()
  totalPage: number;
}
