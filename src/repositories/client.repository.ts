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
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
      await client.query(
        'INSERT INTO client (name, gmail, phone,password) VALUES ($1, $2, $3, $4)',
        [name, gmail, phone, hashedPassword], 
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
}