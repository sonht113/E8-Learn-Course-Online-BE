import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class BannerInputDto {
  @IsNotEmpty()
  @Field()
  title: string;

  @IsOptional()
  @Field()
  description: string;

  @IsNotEmpty()
  @Field()
  imgUrl: string;
}
