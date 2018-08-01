import { Controller, Get, Query, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { AlertService } from './alert.service';
import { CreateAlert, GetSimpleQuery } from './alert.dto';

@Controller('api/v1/alerts')
export class AlertController {
  constructor(private readonly service: AlertService) {}

  @Get()
  getAlertList(@Query() query: GetSimpleQuery) {
    return this.service.getAlertList(query);
  }

  @Post()
  createAlert(@Body() body: CreateAlert) {
    return this.service.createAlert(body);
  }

  @Get('/:id')
  getAlertById(@Param('id') id: string) {
    return this.service.getAlertById(id);
  }

  @Put('/:id')
  updateAlertById(@Param('id') id: string, @Body() body: CreateAlert) {
    return this.service.updateAlertById(id, body);
  }

  @Delete('/:id')
  deleteAlertById(@Param('id') id: string) {
    return this.service.deleteAlertById(id);
  }
}
