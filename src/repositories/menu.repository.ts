import { Injectable } from '@nestjs/common';
import { client } from '../../db/db';

@Injectable()
export class MenuRepository {
  async getAll(): Promise<any[]> {
    const result = await client.query('SELECT * FROM menu');
    return result.rows;
  }

  async getById(id: number): Promise<any | null> {
    const result = await client.query('SELECT * FROM menu WHERE id_menu = $1', [id]);
    return result.rows[0] || null;
  }

  async create(name: string): Promise<any> {
    const result = await client.query(
      'INSERT INTO menu (name) VALUES ($1) RETURNING *',
      [name],
    );
    return result.rows[0];
  }

  async delete(id: number): Promise<boolean> {
    const result = await client.query('DELETE FROM menu WHERE id_menu = $1', [id]);
    return result.rowCount > 0;
  }

  async getGroupsByMenuId(id_menu: number) {
    const result = await client.query(
      'SELECT * FROM "group" WHERE id_menu = $1',
      [id_menu],
    );
    return result.rows;
  }

  async deleteGroup(id_group: number) {
    const result = await client.query(
      'DELETE FROM "group" WHERE id_g = $1 RETURNING *',
      [id_group],
    );
    return result.rowCount > 0;  
  }

  async createGroup(name: string, id_menu: number) {
    const result = await client.query(
      'INSERT INTO "group" (name, id_menu) VALUES ($1, $2) RETURNING *',
      [name, id_menu],
    );
    return result.rows[0];
  }

  async createItem(groupId: number, createItemDto: any) {
    const { name, description, price, new_price, photo } = createItemDto;
    const result = await client.query(
      'INSERT INTO item (id_g, name, description, price, new_price, photo) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [groupId, name, description, price, new_price, photo],
    );
    return result.rows[0];
  }

  async getItemsByGroupId(groupId: number) {
    const result = await client.query(
      'SELECT * FROM item WHERE id_g = $1',
      [groupId],
    );
    return result.rows;
  }

  async deleteItem(id_item: number) {
    const result = await client.query(
      'DELETE FROM item WHERE id_i = $1 RETURNING *',
      [id_item],
    );
    return result.rowCount > 0;
  }

  async getComplementsByItemId(id_item: number) {
    const result = await client.query(
      'SELECT * FROM complement WHERE id_i = $1',
      [id_item],
    );
    return result.rows;
  }

  async createComplement(id_item: number) {
    const result = await client.query(
      'INSERT INTO complement (id_i) VALUES ($1) RETURNING *',
      [id_item],
    );
    return result.rows[0];
  }

  async deleteComplement(id_comp: number) {
    const result = await client.query(
      'DELETE FROM complement WHERE id_comp = $1 RETURNING *',
      [id_comp],
    );
    return result.rowCount > 0;
  }

  async getGroupsByComplementId(id_comp: number) {
    const result = await client.query(
      'SELECT * FROM group_c WHERE id_comp = $1',
      [id_comp],
    );
    return result.rows;
  }

  async createGroupComplement(id_comp: number, name: string, mandatory: boolean, min: number, max: number) {
    const result = await client.query(
      'INSERT INTO group_c (id_comp, name, mandatory, min, max) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [id_comp, name, mandatory, min, max],
    );
    return result.rows[0];
  }

  async deleteGroupComplement(id_gc: number) {
    const result = await client.query(
      'DELETE FROM group_c WHERE id_gc = $1 RETURNING *',
      [id_gc],
    );
    return result.rowCount > 0;
  }

  async getItemsByGroupComplementId(id_gc: number) {
    const result = await client.query(
      'SELECT * FROM item_c WHERE id_gc = $1',
      [id_gc],
    );
    return result.rows;
  }

  async createItemComplement(id_gc: number, name: string, price: number, description: string, status: boolean, photo: string) {
    const result = await client.query(
      'INSERT INTO item_c (id_gc, name, price, description, status, photo) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [id_gc, name, price, description, status, photo],
    );
    return result.rows[0];
  }

  async deleteItemComplement(id_ic: number) {
    const result = await client.query(
      'DELETE FROM item_c WHERE id_ic = $1 RETURNING *',
      [id_ic],
    );
    return result.rowCount > 0;
  }

  async getMenuStructure(id_menu: number): Promise<any> {
    const result = await client.query(
      'SELECT get_menu_structure($1) AS menu_structure',
      [id_menu]
    );
    return result.rows[0].menu_structure;
  }
}
