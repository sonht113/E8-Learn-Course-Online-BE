import { Field, ID, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID } from 'class-validator';

@InputType()
export class CreateCommentInputDto {
  @IsNotEmpty()
  @IsUUID(4, { each: true })
  @Field(() => ID)
  idLecture: string;

  @IsNotEmpty()
  @IsUUID(4, { each: true })
  @Field(() => ID)
  userCreated: string;

  @IsNotEmpty()
  @Field(() => String)
  content: string;

  @IsNotEmpty()
  @IsUUID(4, { each: true })
  @Field(() => [ID], { defaultValue: [] })
  userLiked: string[];
}
