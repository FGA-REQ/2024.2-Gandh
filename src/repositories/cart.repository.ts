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

  async insertComplement(cartItemId: number, complementId: number, quantity: number): Promise<any> {
    const result = await client.query(
      `INSERT INTO cart_item_complement (id_cart_item, id_ic, quantity, full_price) 
       SELECT $1, $2, CAST($3 AS INTEGER), price * CAST($3 AS NUMERIC) 
       FROM item_c 
       WHERE id_ic = $2 
       RETURNING *`,
      [cartItemId, complementId, quantity],
    );
    return result.rows[0];
  }  

  async updateComplementQuantity(cartItemId: number, complementId: number, quantity: number): Promise<any> {
    const result = await client.query(
      `UPDATE cart_item_complement 
       SET quantity = $1, full_price = price * $1 
       WHERE id_cart_item = $2 AND id_ic = $3 
       RETURNING *`,
      [quantity, cartItemId, complementId],
    );
    return result.rows[0];
  }

  async findComplementsOfCartItem(cartItemId: number): Promise<any[]> {
    const result = await client.query(
      `SELECT cic.*, ic.name, ic.price, ic.description, ic.photo 
       FROM cart_item_complement cic 
       JOIN item_c ic ON cic.id_ic = ic.id_ic 
       WHERE cic.id_cart_item = $1`,
      [cartItemId],
    );
    return result.rows;
  }
}
