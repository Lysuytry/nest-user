import { Injectable } from '@nestjs/common';
import { Category } from 'models';
import { GetSimpleQuery, CreateCategory, UpdateCategory } from './category.dto';

@Injectable()
export class CategoryService {
  async getCategoryList({ limit, offset, status }: GetSimpleQuery) {
    const { rows, count } = await Category.findAndCountAll({ where: { status }, limit, offset });
    return [rows, { limit, offset, count }];
  }

  async createCategory(body: CreateCategory) {
    return await Category.create(body);
  }

  async getCategoryById(id: number) {
    return await Category.findOne({ where: { id, status: 'active' } });
  }

  async updateCategoryById(id: number, body: UpdateCategory) {
    return await Category.update(body, { where: { id, status: 'active' } });
  }

  async deleteCategoryById(id: number) {
    const result = await Category.update({ status: 'inactive' }, { where: { id, status: 'active' } });
    return result ? 'deleted Successfully.' : 'Id is invalid.';
  }
}
