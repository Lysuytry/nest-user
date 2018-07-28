import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import * as logger from 'morgan';

declare const module: any;

const bootstrap = async () => {
  const app = await NestFactory.create(ApplicationModule);

  app.use(logger('dev'));
  app.enableCors({ origin: true });

  await app.listen(3000, () => {
    console.log(`Listening port 3000`);
  });

  //Hot reload webpack install and added to project to reduce the recompile whole project when compile ts to js
  //add file webpack.config.js as nodemon
  //add hot to start watch
  //========WEBPACK HOT-MODULE REPLACEMENT===========//
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
  //=================================================//
};

bootstrap();
