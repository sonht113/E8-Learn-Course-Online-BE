import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuid } from 'uuid';
import { Chapter } from './entities/chapter.entity';
import { Repository } from 'typeorm';
import { CreateChapterDto } from './dto/create-course.dto';

@Injectable()
export class ChapterService {
  constructor(
    @InjectRepository(Chapter) private chapterRepository: Repository<Chapter>,
  ) {}

  /**
   * @param idCourse: string
   * @returns [Chapter]
   */
  async getAllChapter(idCourse: string): Promise<Chapter[]> {
    return this.chapterRepository.find({
      where: {
        course: idCourse,
      },
    });
  }

  /**
   * @param id: string
   * @returns Chapter
   */
  async getChapterById(id: string): Promise<Chapter> {
    const chapter = await this.chapterRepository.findOne({
      where: {
        id,
      },
    });
    if (!chapter) {
      throw new Error('Chapter not found');
    }
    return chapter;
  }

  /**
   * @param body: CreateChapterDto
   * @returns Chapter
   */
  async createChapter(body: CreateChapterDto): Promise<Chapter> {
    return this.chapterRepository.save({
      id: uuid(),
      ...body,
    });
  }

  /**
   * @param id: string
   * @param body: CreateChapterDto
   * @returns Chapter
   */
  async updateChapter(id: string, body: CreateChapterDto): Promise<Chapter> {
    const chapter = await this.getChapterById(id);
    Object.assign(chapter, body);
    return this.chapterRepository.save(chapter);
  }

  /**
   * @param id: string
   * @param idCourse: string
   * @returns [Chapter]
   */
  async deleteChapter(id: string, idCourse: string): Promise<Chapter[]> {
    const chapter = await this.getChapterById(id);
    this.chapterRepository.delete(chapter._id);
    return this.getAllChapter(idCourse);
  }
}
