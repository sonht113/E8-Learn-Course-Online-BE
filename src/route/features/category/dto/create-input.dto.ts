import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class CreateCategoryInputDto {
  @IsNotEmpty()
  @Field()
  name: string;

  @IsOptional()
  @Field(() => Number, { defaultValue: 0 })
  totalCourse: number;
}
