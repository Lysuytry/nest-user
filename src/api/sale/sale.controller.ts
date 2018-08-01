import { Controller, Get, Query, Post, Param, Put, Body, Delete } from '@nestjs/common';
import { CreateSale, UpdateSale, GetSimpleQuery } from './sale.dto';
import { SaleService } from './sale.service';

@Controller('api/v1/sales')
export class SaleController {
  constructor(private readonly service: SaleService) {}

  @Get()
  getSaleList(@Query() query: GetSimpleQuery) {
    return this.service.getSaleList(query);
  }

  @Post()
  createSale(@Body() body: CreateSale) {
    return this.service.createSale(body);
  }

  @Get('/:id')
  getSaleById(@Param('id') id: number) {
    return this.service.getSaleById(id);
  }

  @Put('/:id')
  updateSaleById(@Param('id') id: number, @Body() body: UpdateSale) {
    return this.service.updateSaleById(id, body);
  }

  @Delete('/:id')
  deleteSaleById(@Param('id') id: number) {
    return this.service.deleteSaleById(id);
  }
}
