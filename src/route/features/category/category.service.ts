import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';
import { UpdateCategoryInputDto } from './dto/update-input.dto';
import { CreateCategoryInputDto } from './dto/create-input.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async getCategories(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  async getCategoryById(id: string): Promise<Category> {
    const category = await this.categoryRepository.findOne({
      where: {
        id,
      },
    });
    if (!category) {
      throw new Error('Category not found');
    }
    return category;
  }

  async getManyCategory(ids: string[]): Promise<Category[]> {
    return this.categoryRepository.find({
      where: {
        id: {
          $in: ids,
        } as any,
      },
    });
  }

  async createCategory(body: CreateCategoryInputDto): Promise<Category> {
    return this.categoryRepository.save({
      id: uuid(),
      ...body,
    });
  }

  async updateCategory(
    id: string,
    body: UpdateCategoryInputDto,
  ): Promise<Category> {
    const category = await this.getCategoryById(id);
    if (!category) {
      throw new Error('Category not found');
    }

    Object.assign(category, body);
    return this.categoryRepository.save(category);
  }

  async deleteCategory(id: string): Promise<Category[]> {
    const category = await this.getCategoryById(id);
    if (!category) {
      throw new Error('Category not found');
    }
    await this.categoryRepository.delete(category._id);
    return this.getCategories();
  }
}
