import { Injectable } from '@nestjs/common';
import { User } from '../../models/user.model';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
  async getUserList() {
    const [users, total] = await Promise.all([User.find({}), User.countDocuments({})]);
    return { data: users, options: { total } };
  }

  async createUser(body: UserDto) {
    return await User.create(body);
  }

  async findUserById(id: string) {
    return await User.findOne({ _id: id });
  }

  async updateUserById(id: string, data: UserDto) {
    await User.updateOne({ _id: id }, { $set: data });
    return { message: `Successfully updated.` };
  }

  async deleteUserById(id: string) {
    const result = await User.deleteOne({ _id: id });
    const message = !result ? `Id is invalided.` : `Deleted.`;
    return { message };
  }
}
