import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuid } from 'uuid';
import { Comment } from './entities/comment.entity';
import { Repository } from 'typeorm';
import { Pagination } from 'src/types/pagination.type';
import { CreateCommentInputDto } from './dto/create-comment.dto';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment) private commentRepository: Repository<Comment>,
  ) {}

  /**
   *
   * @param idLecture
   * @param page
   * @param limit
   * @returns
   */
  async getComments(
    idLecture: string,
    page?: number,
    limit?: number,
  ): Promise<Pagination<Comment>> {
    const take = Number(limit);
    const skip = page === 1 ? 0 : page * limit;

    const [result, total] = await this.commentRepository.findAndCount({
      where: {
        idLecture,
      },
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

  /**
   *
   * @param body
   * @returns
   */
  async createComment(body: CreateCommentInputDto): Promise<Comment> {
    return this.commentRepository.save({
      id: uuid(),
      ...body,
    });
  }

  /**
   *
   * @param id
   * @param body
   * @returns
   */
  async updateComment(
    id: string,
    body: CreateCommentInputDto,
  ): Promise<Comment> {
    const comment = await this.commentRepository.findOne({
      where: {
        id,
      },
    });
    if (!comment) {
      throw new Error('Comment not found');
    }
    Object.assign(comment, body);
    return this.commentRepository.save(comment);
  }

  /**
   *
   * @param id
   * @param page
   * @param limit
   * @returns
   */
  async deleteComment(
    id: string,
    page: number,
    limit: number,
  ): Promise<Pagination<Comment>> {
    const comment = await this.commentRepository.findOne({
      where: {
        id,
      },
    });
    if (!comment) {
      throw new Error('Comment not found');
    }
    await this.commentRepository.delete(comment._id);
    return this.getComments(comment.idLecture, page, limit);
  }
}
