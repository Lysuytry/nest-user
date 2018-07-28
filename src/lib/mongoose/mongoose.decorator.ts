import { Inject } from '@nestjs/common';

import { MongooseToken } from './mongoose.constants';

export const InjectMongoose = () => Inject(MongooseToken);
