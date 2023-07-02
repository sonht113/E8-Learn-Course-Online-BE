import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuid } from 'uuid';
import { Lecture } from './entities/lecture.entity';
import { Repository } from 'typeorm';
import { CreateLectureInputDto } from './dto/create-lecture.dto';

@Injectable()
export class LectureService {
  constructor(
    @InjectRepository(Lecture) private lectureRepository: Repository<Lecture>,
  ) {}

  /**
   * @function getAllLecture
   * @param idChapter: string
   * @returns [Lecture]
   */
  async getAllLecture(idChapter: string): Promise<Lecture[]> {
    return this.lectureRepository.find({
      where: {
        id_chapter: idChapter,
      },
    });
  }

  /**
   * @function getLectureById
   * @param id: string
   * @returns Lecture
   */
  async getLectureById(id: string): Promise<Lecture> {
    const lecture = await this.lectureRepository.findOne({
      where: {
        id,
      },
    });
    if (!lecture) {
      throw new Error('Lecture not found');
    }
    return lecture;
  }

  /**
   * @function createLecture
   * @param body: CreateLectureInputDto
   * @returns Lecture
   */
  async createLecture(body: CreateLectureInputDto): Promise<Lecture> {
    return this.lectureRepository.save({
      id: uuid(),
      ...body,
    });
  }

  /**
   * @function updateLecture
   * @param id: string
   * @param body: CreateLectureInputDto
   * @returns Lecture
   */
  async updateLecture(
    id: string,
    body: CreateLectureInputDto,
  ): Promise<Lecture> {
    const lecture = await this.getLectureById(id);
    if (!lecture) {
      throw new Error('Lecture not found');
    }
    Object.assign(lecture, body);
    return this.lectureRepository.save(lecture);
  }

  /**
   * @function deleteLecture
   * @param id: string
   * @returns [Lecture]
   */
  async deleteLecture(id: string): Promise<Lecture[]> {
    const lecture = await this.getLectureById(id);
    if (!lecture) {
      throw new Error('Lecture not found');
    }
    await this.lectureRepository.delete(lecture._id);
    return this.getAllLecture(lecture.id_chapter);
  }
}
