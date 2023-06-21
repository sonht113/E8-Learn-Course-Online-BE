import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuid } from 'uuid';
import { Repository } from 'typeorm';
import { Course } from './entities/course.entity';
import { Pagination } from 'src/types/pagination.type';
import { CreateCourseInputDto } from './dto/create-course.dto';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course) private courseRepository: Repository<Course>,
  ) {}

  async getCourses(page?: string, limit?: string): Promise<Pagination<Course>> {
    const take = Number(limit) || 10;
    const skip = Number(page) * Number(limit) || 10;

    const [result, total] = await this.courseRepository.findAndCount({
      take: take,
      skip: skip,
    });

    return {
      result: result,
      page: page,
      limit: limit,
      totalPage: total,
    };
  }

  async getCourseById(id: string): Promise<Course> {
    return this.courseRepository.findOne({
      where: {
        id,
      },
    });
  }

  async createCourse(body: CreateCourseInputDto): Promise<Course> {
    return this.courseRepository.save({
      id: uuid(),
      isFree: Number(body.price) === 0,
      ...body,
    });
  }
}
