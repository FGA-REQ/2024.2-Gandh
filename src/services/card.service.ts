import { Injectable } from '@nestjs/common';
import { CardRepository } from '../repositories/card.repository';

@Injectable()
export class CardService {
  constructor(private readonly cardRepository: CardRepository) {}

  // Obtém os itens do carrinho de um cliente
  async getCartByClientId(clientId: number): Promise<any> {
    const cart = await this.cardRepository.findCartByClientId(clientId);
    if (!cart) {
      throw new Error('Carrinho não encontrado para este cliente.');
    }
    const items = await this.cardRepository.findCartItems(cart.id_cart);
    return { cart, items };
  }

  // Adiciona um item ao carrinho do cliente
  async addItem(clientId: number, itemId: number, quantity: number): Promise<any> {
    const cart = await this.cardRepository.findCartByClientId(clientId);
    if (!cart) {
      throw new Error('Carrinho não encontrado para este cliente.');
    }
    const addedItem = await this.cardRepository.insertCartItem(cart.id_cart, itemId, quantity);
    return addedItem;
  }

  // Atualiza a quantidade de um item no carrinho
  async updateItemQuantity(clientId: number, cartItemId: number, quantity: number): Promise<any> {
    const updatedItem = await this.cardRepository.updateCartItemQuantity(cartItemId, quantity);
    return updatedItem;
  }

  // Remove um item do carrinho
  async removeItem(clientId: number, cartItemId: number): Promise<boolean> {
    const removed = await this.cardRepository.deleteCartItem(cartItemId);
    return removed;
  }

  async getCartTotalByClientId(clientId: number): Promise<number> {
    const cart = await this.cardRepository.findCartByClientId(clientId);
    if (!cart) {
      throw new Error('Carrinho não encontrado para este cliente.');
    }
    const total = await this.cardRepository.getCartTotal(cart.id_cart);
    return total;
  }
}
