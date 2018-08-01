import { Controller, Get, Param, Put, Body, Query, Post, Delete } from '@nestjs/common';
import { productDto } from './product.dto';
import { ProductService } from './product.service';

@Controller('/api/v1/products')
export class ProductController {
  constructor(private readonly service: ProductService) {}

  @Get()
  getProductList(@Query() query) {
    return this.service.getProductList(query);
  }

  @Post()
  createProduct(@Body() body: productDto) {
    return this.service.createProduct(body);
  }

  @Get('/:id')
  getProductById(@Param('id') id) {
    return this.service.getProductById(id);
  }

  @Put('/:id')
  updateProductById(@Param('id') id, @Body() body: productDto) {
    return this.service.updateProductById(id, body);
  }

  @Delete('/:id')
  deleteProductById(@Param('id') id) {
    return this.service.deleteProductById(id);
  }
}
