import { Controller, Get, Query, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CategoryDto } from './category.dto';
import { CategoryService } from './category.service';

@Controller('api/v1/categories')
export class CategoryController {
  constructor(private readonly service: CategoryService) {}

  @Get()
  getCategoryList(@Query() query) {
    return this.service.getCategoryList(query);
  }

  @Post()
  createCategory(@Body() body: CategoryDto) {
    return this.service.createCategory(body);
  }

  @Get('/:id')
  getCategoryById(@Param('id') id) {
    return this.service.getCategoryById(id);
  }

  @Put('/:id')
  updateCategoryById(@Param('id') id, @Body() body: CategoryDto) {
    return this.service.updateCategoryById(id, body);
  }

  @Delete('/:id')
  deleteCategoryById(@Param('id') id) {
    return this.service.deleteCategoryById(id);
  }
}
