import { Controller, Get, Post, Put, Body, Param, Delete, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get()
  getListUser(@Query() query) {
    return this.service.getUserList();
  }

  @Post()
  createUser(@Body() body: UserDto) {
    return this.service.createUser(body);
  }

  @Get(':id')
  getUserById(@Param('id') id) {
    return this.service.findUserById(id);
  }

  @Put(':id')
  updateUserById(@Param() params, @Body() body: UserDto) {
    const id = params.id;
    return this.service.updateUserById(id, body);
  }

  @Delete(':id')
  deleteUserById(@Param('id') id) {
    return this.service.deleteUserById(id);
  }
}
