import {Module} from '@nestjs/common';
import { UserController } from '../users/user.controller';
import { UserService } from '../user/user.service';

@Module({
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
