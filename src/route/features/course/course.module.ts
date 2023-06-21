import { Module } from '@nestjs/common';
import { CourseResolver } from './course.resolver';
import { CourseService } from './course.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { UserModule } from '../user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Course]), UserModule],
  providers: [CourseResolver, CourseService],
})
export class CourseModule {}
