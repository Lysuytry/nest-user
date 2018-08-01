import { Injectable } from '@nestjs/common';
import { Product } from 'models';

@Injectable()
export class ProductService {
  async getProductList(query) {
    return await Product.findAndCountAll();
  }

  async createProduct(body) {
    const user = await Product.create(body);
    return user;
  }

  async getProductById(id) {
    return await Product.findOne({ where: { id, status: 'active' } });
  }

  async updateProductById(id, data) {
    const product = await Product.update(data, { where: { id } });
    return 'updated successfully.';
  }

  async deleteProductById(id) {
    const product = await Product.update({ status: 'inactive' }, { where: { id } });
    return product ? 'delete successfully.' : 'Id is invalid.';
  }
}
