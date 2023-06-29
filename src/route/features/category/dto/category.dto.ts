import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Category')
export class CategoryDto {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  totalCourse: number;
}
