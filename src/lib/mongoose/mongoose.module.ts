import { Global, Module } from '@nestjs/common';
import { mongooseProviders } from './mongoose.providers';

@Global()
@Module({ providers: [...mongooseProviders], exports: [...mongooseProviders]})
export class MongooseModule {}
