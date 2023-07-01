import { Resolver } from '@nestjs/graphql';
import { ChapterService } from './chapter.service';
import { ChapterDto } from './dto/chapter.dto';

@Resolver(() => ChapterDto)
export class ChapterResolver {
  constructor(private chapterService: ChapterService) {}
}
