import { Injectable } from '@nestjs/common';
import { Sale } from 'models';

@Injectable()
export class SaleService {
  async getSaleList(query) {
    return await Sale.findAndCountAll();
  }

  async getSaleById(id) {
    return await Sale.findOne({where: {productId: id}});
  }

  async createSale(body) {
    const {id} = body;
    const [sale] = await Sale.findOrCreate({where: {productId: id}, defaults: body});
    return sale;
  }

  async updateSaleById(id, body) {
    const sale = await Sale.update(body, {where: {productId: id}});
    return sale;
  }

  async deleteSaleById(id) {
    const sale = await Sale.destroy({where: {productId: id}});
    return sale ? 'delete successfully.' : 'Id is invalid.';
  }
}
