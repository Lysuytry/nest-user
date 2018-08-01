import { Controller, Get, Query, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UpdateCategory, CreateCategory, GetSimpleQuery } from './category.dto';
import { CategoryService } from './category.service';

@Controller('api/v1/categories')
export class CategoryController {
  constructor(private readonly service: CategoryService) {}

  @Get()
  getCategoryList(@Query() query: GetSimpleQuery) {
    return this.service.getCategoryList(query);
  }

  @Post()
  createCategory(@Body() body: CreateCategory) {
    return this.service.createCategory(body);
  }

  @Get('/:id')
  getCategoryById(@Param('id') id: number) {
    return this.service.getCategoryById(id);
  }

  @Put('/:id')
  updateCategoryById(@Param('id') id: number, @Body() body: UpdateCategory) {
    return this.service.updateCategoryById(id, body);
  }

  @Delete('/:id')
  deleteCategoryById(@Param('id') id: number) {
    return this.service.deleteCategoryById(id);
  }
}
