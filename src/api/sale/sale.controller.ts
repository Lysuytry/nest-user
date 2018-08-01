import { Controller, Get, Query, Post, Param, Put, Body, Delete } from '@nestjs/common';
import { SaleDto } from './sale.dto';
import { SaleService } from './sale.service';

@Controller('api/v1/sales')
export class SaleController {
  constructor(private readonly service: SaleService) {}

  @Get()
  getSaleList(@Query() query) {
    return this.service.getSaleList(query);
  }

  @Post()
  createSale(@Body() body: SaleDto) {
    return this.service.createSale(body);
  }

  @Get('/:id')
  getSaleById(@Param('id') id) {
    return this.service.getSaleById(id);
  }

  @Put('/:id')
  updateSaleById(@Param('id') id, @Body() body: SaleDto){
    return this.service.updateSaleById(id, body);
  }

  @Delete('/:id')
  deleteSaleById(@Param('id') id) {
    return this.service.deleteSaleById(id);
  }
}
