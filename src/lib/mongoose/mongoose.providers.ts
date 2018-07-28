import { Logger } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { MongooseToken } from './mongoose.constants';

const logger = new Logger('MongooseModule');

export const mongooseProviders = [
  {
    provide: MongooseToken,
    useFactory: async () => {
      //const { MONGO_URI } = configService.validate('MongooseModule', MongooseConfig);
      const MONGO_URI = `mongodb://lysuytry2:a1234567890@ds163630.mlab.com:63630/dbexample`;
      return await mongoose.connect(MONGO_URI);
      //logger.log(mongoose.connection.readyState === 1 ? 'connected' : 'not connected');
      //return mongo;
    }
  },
];
