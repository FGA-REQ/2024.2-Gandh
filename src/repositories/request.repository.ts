import { Injectable } from '@nestjs/common';
import { client } from '../../db/db';

@Injectable()
export class RequestRepository {
  async createOrder(cartId: number, address: string | undefined, deliveryOption: number, orderDetails: string | undefined) {
    await client.query('SELECT create_order($1, $2, $3, $4)', [cartId, address, deliveryOption, orderDetails]);
  }

  async getActiveRequests() {
    const result = await client.query('SELECT * FROM request');
    return result.rows;
  }

  async completeRequest(requestId: number) {
    await client.query('UPDATE request SET is_completed = TRUE WHERE id_request = $1', [requestId]);
  }

  async getOrderDetails(requestId: number) {
    const result = await client.query('SELECT * FROM get_order_details($1)', [requestId]);
    return result.rows;
  }  
}
