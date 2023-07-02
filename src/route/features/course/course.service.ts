import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './entities/course.entity';
import { Pagination } from 'src/types/pagination.type';
import { CreateCourseInputDto } from './dto/create-course.dto';
import { assignUserToCourseDto } from './dto/assign-user-join-course.dto';
import { updateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course) private courseRepository: Repository<Course>,
  ) {}

  async getCourses(page?: number, limit?: number): Promise<Pagination<Course>> {
    const take = Number(limit);
    const skip = page === 1 ? 0 : page * limit;

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
    const course = await this.courseRepository.findOne({
      where: {
        id,
      },
    });

    if (!course) {
      throw new Error('Course not found');
    }

    return course;
  }

  async createCourse(body: CreateCourseInputDto): Promise<Course> {
    return this.courseRepository.save({
      id: uuid(),
      isFree: Number(body.price) === 0,
      ...body,
    });
  }

  async updateUserJoinInCourse(
    id: string,
    body: assignUserToCourseDto,
  ): Promise<Course> {
    const course = await this.getCourseById(id);
    course.usersJoined = [...course.usersJoined, ...body.usersJoined];
    return this.courseRepository.save(course);
  }

  async updateInfoCourse(id: string, body: updateCourseDto): Promise<Course> {
    const course = await this.getCourseById(id);
    Object.assign(course, body);
    return this.courseRepository.save(course);
  }
}
