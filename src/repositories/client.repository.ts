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
    address,
    password,
  }: {
    name: string;
    gmail: string;
    phone: string;
    address: string;
    password: string;
  }) {
    const hashedPassword = await bcrypt.hash(password, 10);
    await client.query('INSERT INTO client (name, gmail, phone, address, password) VALUES ($1, $2, $3, $4, $5)', [
      name,
      gmail,
      phone,
      address,
      hashedPassword,
    ]);
  }
}
