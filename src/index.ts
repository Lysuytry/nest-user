import 'reflect-metadata';
import 'source-map-support/register';
import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import * as logger from 'morgan';
import { AppExceptionFilter } from 'common/exception-filter/exception';
import { ValidationPipe } from '@nestjs/common';
import { ApplicationExceptionFilter } from 'common/exception-filter/application-error';
import 'dotenv/config';

declare const module: any;

const bootstrap = async () => {
  const app = await NestFactory.create(ApplicationModule);
  //app.setGlobalPrefix('api/v1');

  app.use(logger('dev'));
  app.enableCors({ origin: true });

  app.useGlobalFilters(new ApplicationExceptionFilter());
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true, forbidNonWhitelisted: false }));

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
