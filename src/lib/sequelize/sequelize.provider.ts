import { Sequelize } from 'sequelize-typescript';
import { SequelizeToken } from './sequelize.constant';
import * as _ from 'lodash';
import * as models from '../../models';

const { DB_HOST, DB_PORT, DB_SCHEMA, DB_USERNAME, DB_PASSWORD, DB_CONNECTION, DB_LOGGING } = process.env;
export const databaseProvider = {
  provide: SequelizeToken,
  useFactory: async () => {
    const sequelize = new Sequelize({
      host: DB_HOST,
      database: DB_SCHEMA,
      username: DB_USERNAME,
      password: DB_PASSWORD,
      dialect: DB_CONNECTION,
      logging: DB_LOGGING ? console.log : false,
      operatorsAliases: false
    });
    sequelize.addModels(_.map(models, x => x));
    await sequelize.sync();
    return sequelize;
  }
};
