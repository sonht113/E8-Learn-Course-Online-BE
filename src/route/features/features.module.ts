import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { BannerModule } from './banner/banner.module';
import { CourseModule } from './course/course.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [UserModule, BannerModule, CourseModule, CategoryModule],
})
export class FeaturesModule {}
