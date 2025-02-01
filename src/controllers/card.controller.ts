import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CardService } from '../services/card.service';

@Controller('cart')  
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Get(':clientId')
  async getCart(@Param('clientId') clientId: number): Promise<any> {
    return await this.cardService.getCartByClientId(clientId);
  }

  // Adiciona um item ao carrinho do cliente
  @Post(':clientId/item')
  async addItemToCart(
    @Param('clientId') clientId: number,
    @Body() body: { itemId: number; quantity?: number },
  ): Promise<any> {
    const { itemId, quantity } = body;
    const addedItem = await this.cardService.addItem(clientId, itemId, quantity || 1);
    return { message: 'Item adicionado ao carrinho com sucesso.', item: addedItem };
  }

  // Atualiza a quantidade de um item no carrinho
  @Put(':clientId/item/:cartItemId')
  async updateCartItem(
    @Param('clientId') clientId: number,
    @Param('cartItemId') cartItemId: number,
    @Body() body: { quantity: number },
  ): Promise<any> {
    const updated = await this.cardService.updateItemQuantity(clientId, cartItemId, body.quantity);
    return { message: 'Quantidade atualizada com sucesso.', item: updated };
  }

  // Remove um item do carrinho
  @Delete(':clientId/item/:cartItemId')
  async removeItemFromCart(
    @Param('clientId') clientId: number,
    @Param('cartItemId') cartItemId: number,
  ): Promise<any> {
    const removed = await this.cardService.removeItem(clientId, cartItemId);
    if (removed) {
      return { message: 'Item removido com sucesso.' };
    } else {
      return { message: 'Item não encontrado no carrinho.' };
    }
  }

  @Get(':clientId/total')
  async getCartTotal(@Param('clientId') clientId: number): Promise<any> {
    const total = await this.cardService.getCartTotalByClientId(clientId);
    return { total };
  }
}
