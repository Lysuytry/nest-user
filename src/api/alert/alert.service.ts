import { Injectable } from '@nestjs/common';
import { Alert } from 'models';
import { CreateAlert, GetSimpleQuery } from './alert.dto';

@Injectable()
export class AlertService {
  async getAlertList({ limit, offset }: GetSimpleQuery) {
    const { rows, count } = await Alert.findAndCountAll({ limit, offset });
    return [rows, { count, limit, offset }];
  }

  async createAlert(body: CreateAlert) {
    return await Alert.create(body);
  }

  async getAlertById(id: string) {
    return await Alert.findOne({ where: { id } });
  }

  async updateAlertById(id: string, body: CreateAlert) {
    return await Alert.update(body, { where: { id } });
  }

  async deleteAlertById(id: string) {
    const result = await Alert.destroy({ where: { id } });
    return result ? 'delete successfully.' : 'Id is invalid.';
  }
}
