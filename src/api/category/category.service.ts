import { Injectable } from '@nestjs/common';
import { Category } from 'models';

@Injectable()
export class CategoryService {
  async getCategoryList(query) {
    return await Category.findAndCountAll();
  }

  async createCategory(body) {
    return await Category.create(body);
  }

  async getCategoryById(id) {
    return await Category.findOne({ where: { id, status: 'active' } });
  }

  async updateCategoryById(id, body) {
    return await Category.update(body, { where: { id, status: 'active' } });
  }

  async deleteCategoryById(id) {
    const result = await Category.update({ status: 'inactive' }, { where: { id, status: 'active' } });
    return result ? 'deleted Successfully.' : 'Id is invalid.';
  }
}
