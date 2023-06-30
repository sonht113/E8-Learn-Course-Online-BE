import { CategoryModule } from './../category/category.module';
import { Module } from '@nestjs/common';
import { CourseResolver } from './course.resolver';
import { CourseService } from './course.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { UserModule } from '../user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Course]), UserModule, CategoryModule],
  providers: [CourseResolver, CourseService],
})
export class CourseModule {}
