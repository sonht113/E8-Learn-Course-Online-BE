import { Module } from '@nestjs/common';
import { LectureService } from './lecture.service';
import { LectureResolver } from './lecture.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lecture } from './entities/lecture.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Lecture])],
  providers: [LectureService, LectureResolver],
  exports: [],
})
export class LectureModule {}
