import { Field, ObjectType } from '@nestjs/graphql';
import { CommentDto } from './comment.dto';

@ObjectType()
export class CommentPaginateDto {
  @Field(() => [CommentDto])
  result: CommentDto[];

  @Field()
  page: number;

  @Field()
  limit: number;

  @Field()
  totalPage: number;
}
