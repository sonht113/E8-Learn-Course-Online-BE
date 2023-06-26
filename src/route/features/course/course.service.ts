import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Course } from './entities/course.entity';
import { Pagination } from 'src/types/pagination.type';
import { CreateCourseInputDto } from './dto/create-course.dto';
import { UpdateCourseInputDto } from './dto/update-course.dto';
import { ObjectId } from 'mongodb';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course) private courseRepository: MongoRepository<Course>,
  ) {}

  async getCourses(page?: string, limit?: string): Promise<Pagination<Course>> {
    const take = Number(limit);
    const skip = page === '1' ? 0 : Number(page) * Number(limit);

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
        _id: id,
      },
    });
  }

  async createCourse(body: CreateCourseInputDto): Promise<Course> {
    return this.courseRepository.save({
      isFree: Number(body.price) === 0,
      ...body,
    });
  }

  async updateCourse(id: string, body: UpdateCourseInputDto): Promise<Course> {
    await this.courseRepository.findOneAndUpdate(
      { _id: new ObjectId(id) },
      body,
    );

    return this.courseRepository.findOne({
      where: {
        _id: id,
      },
    });
  }
}
