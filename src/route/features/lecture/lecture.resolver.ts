import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LectureDto } from './dto/lecture.dto';
import { LectureService } from './lecture.service';
import { CreateLectureInputDto } from './dto/create-lecture.dto';

@Resolver(() => LectureDto)
export class LectureResolver {
  constructor(private lectureService: LectureService) {}

  @Query(() => [LectureDto])
  queryAllLecture(@Args('idChapter') idChapter: string): Promise<LectureDto[]> {
    return this.lectureService.getAllLecture(idChapter);
  }

  @Query(() => LectureDto)
  queryLecture(@Args('id') id: string): Promise<LectureDto> {
    return this.lectureService.getLectureById(id);
  }

  @Mutation(() => LectureDto)
  createLecture(
    @Args('body') body: CreateLectureInputDto,
  ): Promise<LectureDto> {
    return this.lectureService.createLecture(body);
  }

  @Mutation(() => LectureDto)
  updateLecture(
    @Args('id') id: string,
    @Args('body') body: CreateLectureInputDto,
  ): Promise<LectureDto> {
    return this.lectureService.updateLecture(id, body);
  }

  @Mutation(() => [LectureDto])
  deleteLecture(@Args('id') id: string): Promise<LectureDto[]> {
    return this.deleteLecture(id);
  }
}
