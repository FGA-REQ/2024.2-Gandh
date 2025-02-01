import { Injectable } from '@nestjs/common';
import { CartRepository } from '../repositories/cart.repository';

@Injectable()
export class CartService {
  constructor(private readonly cartRepository: CartRepository) {}

  // Obtém os itens do carrinho de um cliente
  async getCartByClientId(clientId: number): Promise<any> {
    const cart = await this.cartRepository.findCartByClientId(clientId);
    if (!cart) {
      throw new Error('Carrinho não encontrado para este cliente.');
    }
    const items = await this.cartRepository.findCartItems(cart.id_cart);
    return { cart, items };
  }

  // Adiciona um item ao carrinho do cliente
  async addItem(clientId: number, itemId: number, quantity: number): Promise<any> {
    const cart = await this.cartRepository.findCartByClientId(clientId);
    if (!cart) {
      throw new Error('Carrinho não encontrado para este cliente.');
    }
    const addedItem = await this.cartRepository.insertCartItem(cart.id_cart, itemId, quantity);
    return addedItem;
  }

  // Atualiza a quantidade de um item no carrinho
  async updateItemQuantity(clientId: number, cartItemId: number, quantity: number): Promise<any> {
    const updatedItem = await this.cartRepository.updateCartItemQuantity(cartItemId, quantity);
    return updatedItem;
  }

  // Remove um item do carrinho
  async removeItem(clientId: number, cartItemId: number): Promise<boolean> {
    const removed = await this.cartRepository.deleteCartItem(cartItemId);
    return removed;
  }

  async getCartTotalByClientId(clientId: number): Promise<number> {
    const cart = await this.cartRepository.findCartByClientId(clientId);
    if (!cart) {
      throw new Error('Carrinho não encontrado para este cliente.');
    }
    const total = await this.cartRepository.getCartTotal(cart.id_cart);
    return total;
  }
}
