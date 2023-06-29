import { UserService } from './../user/user.service';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { CourseService } from './course.service';
import { CoursePaginateDto } from './dto/course-paginate.dto';
import { CreateCourseInputDto } from './dto/create-course.dto';
import { CourseDto } from './dto/course.dto';
import { Course } from './entities/course.entity';
import { assignUserToCourseDto } from './dto/update-course.dto';

@Resolver(() => CourseDto)
export class CourseResolver {
  constructor(
    private userService: UserService,
    private courseService: CourseService,
  ) {}

  @Query(() => CoursePaginateDto)
  getCourses(@Args('page') page: string, @Args('limit') limit: string) {
    return this.courseService.getCourses(page, limit);
  }

  @Query(() => CourseDto)
  getCourse(@Args('id') id: string) {
    return this.courseService.getCourseById(id);
  }

  @Mutation(() => CourseDto)
  createCourse(@Args('body') body: CreateCourseInputDto) {
    return this.courseService.createCourse(body);
  }

  @Mutation(() => CourseDto)
  assignUserToCourse(
    @Args('id') id: string,
    @Args('body') body: assignUserToCourseDto,
  ) {
    return this.courseService.updateUserJoinInCourse(id, body);
  }

  @ResolveField()
  async userCreated(@Parent() course: Course) {
    return this.userService.getUserById(course.userCreated);
  }

  @ResolveField()
  async usersJoined(@Parent() course: Course) {
    return this.userService.getManyUserById(course.usersJoined);
  }
}
