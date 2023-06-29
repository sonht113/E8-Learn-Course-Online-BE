import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CategoryDto } from './dto/category.dto';
import { CategoryService } from './category.service';
import { CreateCategoryInputDto } from './dto/create-input.dto';
import { UpdateCategoryInputDto } from './dto/update-input.dto';

@Resolver(() => CategoryDto)
export class CategoryResolver {
  constructor(private categoryService: CategoryService) {}

  @Query(() => [CategoryDto])
  async getCategories(): Promise<CategoryDto[]> {
    return this.categoryService.getCategories();
  }

  @Query(() => CategoryDto)
  async getCategoryById(@Args('id') id: string): Promise<CategoryDto> {
    return this.categoryService.getCategoryById(id);
  }

  @Mutation(() => CategoryDto)
  async createCategory(
    @Args('body') body: CreateCategoryInputDto,
  ): Promise<CategoryDto> {
    return this.categoryService.createCategory(body);
  }

  @Mutation(() => CategoryDto)
  async updateCategory(
    @Args('id') id: string,
    @Args('body') body: UpdateCategoryInputDto,
  ): Promise<CategoryDto> {
    return this.categoryService.updateCategory(id, body);
  }

  @Mutation(() => [CategoryDto])
  async deleteCategory(@Args('id') id: string): Promise<CategoryDto[]> {
    return this.categoryService.deleteCategory(id);
  }
}
