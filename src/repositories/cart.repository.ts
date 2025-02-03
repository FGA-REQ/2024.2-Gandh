import { Injectable } from '@nestjs/common';
import { client } from '../../db/db'; 

@Injectable()
export class CartRepository {
  async findCartByClientId(clientId: number): Promise<any> {
    const result = await client.query(
      'SELECT * FROM cart WHERE client_id = $1',
      [clientId]
    );
    return result.rows[0] || null;
  }

  async findCartItems(cartId: number): Promise<any[]> {
    const result = await client.query(
      'SELECT * FROM cart_item WHERE cart_id = $1',
      [cartId]
    );
    return result.rows;
  }

  async insertCartItem(cartId: number, itemId: number, quantity: number): Promise<any> {
    const result = await client.query(
      `INSERT INTO cart_item (cart_id, item_id, quantity) 
       VALUES ($1, $2, $3) RETURNING *`,
      [cartId, itemId, quantity]
    );
    return result.rows[0];
  }

  async updateCartItemQuantity(cartItemId: number, quantity: number): Promise<any> {
    const result = await client.query(
      `UPDATE cart_item SET quantity = $1 
       WHERE id_cart_item = $2 RETURNING *`,
      [quantity, cartItemId]
    );
    return result.rows[0];
  }

  async deleteCartItem(cartItemId: number): Promise<boolean> {
    const result = await client.query(
      `DELETE FROM cart_item WHERE id_cart_item = $1`,
      [cartItemId]
    );
    return result.rowCount > 0;
  }

  async getCartTotal(cartId: number): Promise<number> {
    const result = await client.query(
      'SELECT get_cart_total($1) AS total',
      [cartId]
    );
    return result.rows[0].total;
  }
}
