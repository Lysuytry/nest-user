import { Injectable } from '@nestjs/common';
import { Sale } from 'models';
import { GetSimpleQuery, CreateSale, UpdateSale } from './sale.dto';

@Injectable()
export class SaleService {
  async getSaleList({ limit, offset }: GetSimpleQuery) {
    return await Sale.findAndCountAll();
  }

  async getSaleById(id: number) {
    return await Sale.findOne({ where: { productId: id } });
  }

  async createSale(body: CreateSale) {
    const id = body.productId;
    const [sale] = await Sale.findOrCreate({ where: { productId: id }, defaults: body });
    return sale;
  }

  async updateSaleById(id: number, body: UpdateSale) {
    const sale = await Sale.update(body, { where: { productId: id } });
    return sale;
  }

  async deleteSaleById(id: number) {
    const sale = await Sale.destroy({ where: { productId: id } });
    return sale ? 'delete successfully.' : 'Id is invalid.';
  }
}
