import { Controller, Get, Query, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UserDto } from './user.dto';
import { UserService } from '../users/user.service';

@Controller('api/v1/users')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get()
  getUserList(@Query() query) {
    return this.service.getUserList(query);
  }

  @Post()
  createUser(@Body() body: UserDto) {
    return this.service.createUser(body);
  }

  @Get('/:id')
  getUserById(@Param('id') id) {
    return this.service.getUserById(id);
  }

  @Put('/:id')
  updateUserById(@Param('id') id, @Body() body: UserDto) {
    return this.service.updateUserById(id, body);
  }

  @Delete('/:id')
  deleteUserById(@Param('id') id) {
    return this.service.deleteUserById(id);
  }
}
