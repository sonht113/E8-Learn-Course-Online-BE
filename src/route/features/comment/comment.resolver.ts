import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { CommentDto } from './dto/comment.dto';
import { CommentService } from './comment.service';
import { CreateCommentInputDto } from './dto/create-comment.dto';
import { UserService } from '../user/user.service';
import { Comment } from './entities/comment.entity';
import { UserDto } from '../user/dto/user.dto';
import { CommentPaginateDto } from './dto/comment-pagination.dto';

@Resolver(() => CommentDto)
export class CommentResolver {
  constructor(
    private commentService: CommentService,
    private userService: UserService,
  ) {}

  @Query(() => CommentPaginateDto)
  queryComments(
    @Args('idLecture') idLecture: string,
    @Args('page') page: number,
    @Args('limit') limit: number,
  ): Promise<CommentPaginateDto> {
    return this.commentService.getComments(idLecture, page, limit);
  }

  @Mutation(() => CommentDto)
  createComment(
    @Args('body') body: CreateCommentInputDto,
  ): Promise<CommentDto> {
    return this.commentService.createComment(body);
  }

  @Mutation(() => CommentDto)
  updateComment(
    @Args('id') id: string,
    @Args('body') body: CreateCommentInputDto,
  ): Promise<CommentDto> {
    return this.commentService.updateComment(id, body);
  }

  @Mutation(() => CommentPaginateDto)
  deleteComment(
    @Args('id') id: string,
    @Args('page') page: number,
    @Args('limit') limit: number,
  ): Promise<CommentPaginateDto> {
    return this.commentService.deleteComment(id, page, limit);
  }

  @ResolveField()
  userCreated(@Parent() comment: Comment): Promise<UserDto> {
    return this.userService.getUserById(comment.userCreated);
  }

  @ResolveField()
  userLiked(@Parent() comment: Comment): Promise<UserDto[]> {
    return this.userService.getManyUserById(comment.userLiked);
  }
}
