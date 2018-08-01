import { Sequelize } from 'sequelize-typescript';
import { SequelizeToken } from './sequelize.constant';
import * as _ from 'lodash';
import * as models from '../../models';

const { DB_HOST, DB_PORT, DB_SCHEMA, DB_USERNAME, DB_PASSWORD, DB_CONNECTION, DB_LOGGING } = process.env;
export const databaseProvider = {
  provide: SequelizeToken,
  useFactory: async () => {
    const sequelize = new Sequelize({
      host: 'localhost',
      database: 'stock-example',
      username: 'root',
      password: '16021997',
      dialect: 'mysql',
      logging: DB_LOGGING ? console.log : false,
      operatorsAliases: false
    });
    //console.log(model);
    sequelize.addModels(_.map(models, x => x));
    //console.log(models);
    await sequelize.sync();
    return sequelize;
  }
};
