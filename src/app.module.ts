import { Module } from '@nestjs/common';
import { MongooseModule } from './lib/mongoose/mongoose.module';

@Module({
  imports: [
    MongooseModule
  ]
})
export class ApplicationModule {}
