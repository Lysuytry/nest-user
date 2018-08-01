import { Injectable } from '@nestjs/common';
import { Alert } from 'models';

@Injectable()
export class AlertService {
  async getAlertList(query) {
    return await Alert.findAndCountAll();
  }

  async createAlert(body) {
    return await Alert.create(body);
  }

  async getAlertById(id) {
    return await Alert.findOne({ where: id });
  }

  async updateAlertById(id, body) {
    return await Alert.update(body, { where: id });
  }

  async deleteAlertById(id) {
    const result = await Alert.destroy({ where: id });
    return result ? 'delete successfully.' : 'Id is invalid.';
  }
}
