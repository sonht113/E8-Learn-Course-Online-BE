import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Banner } from './entities/banner.entity';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { BannerInputDto } from './dto/create-banner.dto';

@Injectable()
export class BannerService {
  constructor(
    @InjectRepository(Banner) private bannerRepository: Repository<Banner>,
  ) {}

  async getBanners(): Promise<Banner[]> {
    return this.bannerRepository.find();
  }

  async createBanner(body: BannerInputDto): Promise<Banner> {
    return this.bannerRepository.save({
      id: uuid(),
      ...body,
    });
  }
}
