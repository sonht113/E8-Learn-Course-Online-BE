import { Mutation, Query, Resolver, Args } from '@nestjs/graphql';
import { BannerDto } from './dto/banner.dto';
import { BannerService } from './banner.service';
import { BannerInputDto } from './dto/create-banner.dto';

@Resolver(() => BannerDto)
export class BannerResolver {
  constructor(private bannerService: BannerService) {}

  @Query(() => [BannerDto], { name: 'banners' })
  banners() {
    return this.bannerService.getBanners();
  }

  @Mutation(() => BannerDto)
  createBanner(@Args('body') body: BannerInputDto) {
    return this.bannerService.createBanner(body);
  }
}
