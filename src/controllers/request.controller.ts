import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { RequestService } from '../services/request.service';

@Controller('request')
export class RequestController {
  constructor(private readonly requestService: RequestService) {}

  @Post()
  async createOrder(@Body() body: { cartId: number; address?: string; deliveryOption: number; orderDetails?: string }) {
    await this.requestService.createOrder(body.cartId, body.address, body.deliveryOption, body.orderDetails);
    return { message: 'Pedido criado com sucesso.' };
  }

  @Get()
  async getActiveRequests() {
    return await this.requestService.getActiveRequests();
  }

  @Put(':requestId/complete')
  async completeRequest(@Param('requestId') requestId: number) {
    await this.requestService.completeRequest(requestId);
    return { message: 'Pedido marcado como completo e removido.' };
  }
}