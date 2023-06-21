import { Module } from '@nestjs/common';
import { LessonModule } from './lesson/lesson.module';
import { UserModule } from './user/user.module';
import { StudentModule } from './student/student.module';
import { BannerModule } from './banner/banner.module';
import { CourseModule } from './course/course.module';

@Module({
  imports: [
    LessonModule,
    UserModule,
    StudentModule,
    BannerModule,
    CourseModule,
  ],
})
export class FeaturesModule {}
