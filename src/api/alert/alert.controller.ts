import { Controller, Get, Query, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { AlertService } from './alert.service';
import { AlertDto } from './alert.dto';

@Controller('api/v1/alerts')
export class AlertController {
  constructor(private readonly service: AlertService) {}

  @Get()
  getAlertList(@Query() query) {
    return this.service.getAlertList(query);
  }

  @Post()
  createAlert(@Body() body: AlertDto) {
    return this.service.createAlert(body);
  }

  @Get('/:id')
  getAlertById(@Param('id') id) {
    return this.service.getAlertById(id);
  }

  @Put('/:id')
  updateAlertById(@Param('id') id, @Body() body: AlertDto) {
    return this.service.updateAlertById(id, body);
  }

  @Delete('/:id')
  deleteAlertById(@Param('id') id) {
    return this.service.deleteAlertById(id);
  }
}
