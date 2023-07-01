import { Module } from '@nestjs/common';
import { ChapterService } from './chapter.service';
import { ChapterResolver } from './chapter.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chapter } from './entities/chapter.entity';

@Module({
  imports: [ChapterService, ChapterResolver],
  exports: [TypeOrmModule.forFeature([Chapter])],
})
export class ChapterModule {}
