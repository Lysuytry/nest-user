import { Module } from '@nestjs/common';
import { APIModule } from 'api/api.module';
import { SequelizeModule } from 'lib/sequelize';
import { MongooseModule } from 'lib/mongoose';

@Module({
  imports: [MongooseModule, SequelizeModule, APIModule]
})
export class ApplicationModule {}
