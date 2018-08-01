import { Injectable } from '@nestjs/common';
import { User } from 'models/users.model';

@Injectable()
export class UserService {
  async getUserList(query) {
    return await User.findAndCountAll();
  }

  async createUser(body) {
    return await User.create(body);
  }

  async getUserById(id) {
    return await User.findOne({ where: { id, status: 'active' } });
  }

  async updateUserById(id, body) {
    return await User.update(body, { where: { id, status: 'active' } });
  }

  async deleteUserById(id) {
    const result = await User.update({ status: 'inactive' }, { where: { id, status: 'active' } });
    return result ? 'deleted successfully.' : 'Id is invalid.';
  }
}
