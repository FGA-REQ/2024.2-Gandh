import { Injectable } from '@nestjs/common';
import { RequestRepository } from '../repositories/request.repository';

@Injectable()
export class RequestService {
  constructor(private readonly requestRepository: RequestRepository) {}

  async createOrder(cartId: number, address: string | undefined, deliveryOption: number, orderDetails: string | undefined) {
    return await this.requestRepository.createOrder(cartId, address, deliveryOption, orderDetails);
  }

  async getActiveRequests() {
    return await this.requestRepository.getActiveRequests();
  }

  async completeRequest(requestId: number) {
    return await this.requestRepository.completeRequest(requestId);
  }

  async getOrderDetails(requestId: number) {
    return await this.requestRepository.getOrderDetails(requestId);
  }  
}