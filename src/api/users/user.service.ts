import { Injectable } from '@nestjs/common';
import { User } from 'models/users.model';
import { GetSimpleQuery, CreateUser, UpdateUser } from './user.dto';

@Injectable()
export class UserService {
  async getUserList({ limit, offset, status }: GetSimpleQuery) {
    const { rows, count } = await User.findAndCountAll({ limit, offset });
    return [rows, { count, limit, offset }];
  }

  async createUser(body: CreateUser) {
    return await User.create(body);
  }

  async getUserById(id: number) {
    return await User.findOne({ where: { id, status: 'active' } });
  }

  async updateUserById(id: number, body: UpdateUser) {
    return await User.update(body, { where: { id, status: 'active' } });
  }

  async deleteUserById(id: number) {
    const result = await User.update({ status: 'inactive' }, { where: { id, status: 'active' } });
    return result ? 'deleted successfully.' : 'Id is invalid.';
  }
}
