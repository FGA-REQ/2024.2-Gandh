import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CartService } from '../services/cart.service';

@Controller('cart')  
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get(':clientId')
  async getCart(@Param('clientId') clientId: number): Promise<any> {
    return await this.cartService.getCartByClientId(clientId);
  }

  // Adiciona um item ao carrinho do cliente
  @Post(':clientId/item')
  async addItemToCart(
    @Param('clientId') clientId: number,
    @Body() body: { itemId: number; quantity?: number },
  ): Promise<any> {
    const { itemId, quantity } = body;
    const addedItem = await this.cartService.addItem(clientId, itemId, quantity || 1);
    return { message: 'Item adicionado ao carrinho com sucesso.', item: addedItem };
  }

  // Atualiza a quantidade de um item no carrinho
  @Put(':clientId/item/:cartItemId')
  async updateCartItem(
    @Param('clientId') clientId: number,
    @Param('cartItemId') cartItemId: number,
    @Body() body: { quantity: number },
  ): Promise<any> {
    const updated = await this.cartService.updateItemQuantity(clientId, cartItemId, body.quantity);
    return { message: 'Quantidade atualizada com sucesso.', item: updated };
  }

  // Remove um item do carrinho
  @Delete(':clientId/item/:cartItemId')
  async removeItemFromCart(
    @Param('clientId') clientId: number,
    @Param('cartItemId') cartItemId: number,
  ): Promise<any> {
    const removed = await this.cartService.removeItem(clientId, cartItemId);
    if (removed) {
      return { message: 'Item removido com sucesso.' };
    } else {
      return { message: 'Item não encontrado no carrinho.' };
    }
  }

  @Get(':clientId/total')
  async getCartTotal(@Param('clientId') clientId: number): Promise<any> {
    const total = await this.cartService.getCartTotalByClientId(clientId);
    return { total };
  }

  @Post(':clientId/item/:cartItemId/complement')
  async addComplementToCartItem(
    @Param('clientId') clientId: number,
    @Param('cartItemId') cartItemId: number,
    @Body() body: { complementId: number; quantity: number },
  ): Promise<any> {
    const { complementId, quantity } = body;
    const addedComplement = await this.cartService.addComplementToItem(cartItemId, complementId, quantity);
    return { message: 'Complemento adicionado com sucesso.', complement: addedComplement };
  }

  // Atualiza a quantidade de um complemento de item no carrinho
  @Put(':clientId/item/:cartItemId/complement/:complementId')
  async updateComplementQuantity(
    @Param('clientId') clientId: number,
    @Param('cartItemId') cartItemId: number,
    @Param('complementId') complementId: number,
    @Body() body: { quantity: number },
  ): Promise<any> {
    const updatedComplement = await this.cartService.updateComplementQuantity(cartItemId, complementId, body.quantity);
    return { message: 'Quantidade do complemento atualizada com sucesso.', complement: updatedComplement };
  }

  // Lista os complementos de um item do carrinho
  @Get(':clientId/item/:cartItemId/complements')
  async getComplementsOfCartItem(@Param('cartItemId') cartItemId: number): Promise<any> {
    const complements = await this.cartService.getComplementsOfCartItem(cartItemId);
    return { complements };
  }
}
