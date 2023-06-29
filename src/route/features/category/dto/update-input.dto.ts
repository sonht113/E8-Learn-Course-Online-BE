import { Field, InputType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@InputType()
export class UpdateCategoryInputDto {
  @IsOptional()
  @Field(() => String)
  name: string;

  @IsOptional()
  @Field(() => Number)
  totalCourse: number;
}
