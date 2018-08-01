import { Injectable } from '@nestjs/common';
import { Product } from 'models';
import { GetSimpleQuery, CreateProduct, UpdateProduct } from './product.dto';

@Injectable()
export class ProductService {
  async getProductList({ limit, offset, status }: GetSimpleQuery) {
    const { rows, count } = await Product.findAndCountAll({ where: { status }, limit, offset });
    return [rows, { limit, offset, count }];
  }

  async createProduct(body: CreateProduct) {
    const user = await Product.create(body);
    return user;
  }

  async getProductById(id: number) {
    return await Product.findOne({ where: { id, status: 'active' } });
  }

  async updateProductById(id: number, body: UpdateProduct) {
    const product = await Product.update(body, { where: { id } });
    return 'updated successfully.';
  }

  async deleteProductById(id: number) {
    const product = await Product.update({ status: 'inactive' }, { where: { id } });
    return product ? 'delete successfully.' : 'Id is invalid.';
  }
}
