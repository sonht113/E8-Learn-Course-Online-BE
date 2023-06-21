import { Module } from '@nestjs/common';
import { BannerResolver } from './banner.resolver';
import { BannerService } from './banner.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Banner } from './entities/banner.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Banner])],
  providers: [BannerResolver, BannerService],
})
export class BannerModule {}
