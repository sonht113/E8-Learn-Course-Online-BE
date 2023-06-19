import { Module } from '@nestjs/common';
import { LessonModule } from './lesson/lesson.module';
import { UserModule } from './user/user.module';
import { StudentModule } from './student/student.module';

@Module({
  imports: [LessonModule, UserModule, StudentModule],
})
export class FeaturesModule {}
