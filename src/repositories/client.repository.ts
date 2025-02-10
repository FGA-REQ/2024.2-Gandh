import { Injectable } from '@nestjs/common';
import { client } from '../../db/db';
import * as bcrypt from 'bcrypt';

@Injectable()
export class ClientRepository {
  async getAll() {
    const result = await client.query('SELECT * FROM client');
    return result.rows;
  }

  async create({
    name,
    gmail,
    phone,
    password,
  }: {
    name: string;
    gmail: string;
    phone: string;
    password: string;
  }) {
    try {
      await client.query(
        'INSERT INTO client (name, gmail, phone,password) VALUES ($1, $2, $3, $4)',
        [name, gmail, phone, password], 
      );
    } catch (error) {
      console.error('Erro ao criar cliente:', error);
      throw new Error('Erro ao criar cliente no banco de dados');
    }
  }

  async findOneByEmail(gmail: string) {
    const result = await client.query('SELECT * FROM client WHERE gmail = $1', [gmail]);
    return result.rows[0];
  }

  async findOneById(id: number) {
    const result = await client.query('SELECT * FROM client WHERE id = $1', [id]);
    return result.rows[0];
  }

  async updateFidelity(id: number, fidelity: number) {
    await client.query('SELECT update_fidelity($1, $2)', [id, fidelity]);
  }

  async updateFields(id: number, data: Partial<Client>) {
    try {
      const query = `
        UPDATE client
        SET ${Object.keys(data)
          .map((key, index) => `${key} = $${index+1}`)
          .join(', ')}
        WHERE id = $${Object.keys(data).length + 1}
      `;

      const values = [...Object.values(data), id];
      await client.query(query, values);

    } catch (error) {
      console.error('Erro ao atualizar cliente:', error);
      throw new Error('Erro ao atualizar o cliente no banco de dados');
    }
  }
}