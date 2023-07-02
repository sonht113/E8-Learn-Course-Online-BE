import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';
import { ChapterService } from './chapter.service';
import { ChapterDto } from './dto/chapter.dto';
import { CreateChapterDto } from './dto/create-course.dto';

@Resolver(() => ChapterDto)
export class ChapterResolver {
  constructor(private chapterService: ChapterService) {}

  @Query(() => [ChapterDto])
  queryAllChapter(@Args('idCourse') idCourse: string): Promise<ChapterDto[]> {
    return this.chapterService.getAllChapter(idCourse);
  }

  @Query(() => ChapterDto)
  queryChapter(@Args('id') id: string): Promise<ChapterDto> {
    return this.chapterService.getChapterById(id);
  }

  @Mutation(() => ChapterDto)
  createChapter(@Args('body') body: CreateChapterDto): Promise<ChapterDto> {
    return this.chapterService.createChapter(body);
  }

  @Mutation(() => ChapterDto)
  updateChapter(
    @Args('id') id: string,
    @Args('body') body: CreateChapterDto,
  ): Promise<ChapterDto> {
    return this.updateChapter(id, body);
  }

  @Mutation(() => [ChapterDto])
  deleteChapter(
    @Args('id') id: string,
    @Args('idCourse') idCourse: string,
  ): Promise<ChapterDto[]> {
    return this.deleteChapter(id, idCourse);
  }
}
