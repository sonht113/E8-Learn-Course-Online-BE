import { Field, ObjectType, ID } from '@nestjs/graphql';

@ObjectType('Banner')
export class BannerDto {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  imgUrl: string;
}
