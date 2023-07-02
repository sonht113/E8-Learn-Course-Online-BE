import { Resolver } from '@nestjs/graphql';
import { CommentDto } from './dto/comment.dto';
import { CommentService } from './comment.service';

@Resolver(() => CommentDto)
export class CommentResolver {
  constructor(private commentService: CommentService) {}
}
