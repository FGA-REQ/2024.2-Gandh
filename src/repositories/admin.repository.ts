import { Injectable } from '@nestjs/common';
import { client } from '../../db/db';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AdminRepository {
  async getAll() {
    const result = await client.query('SELECT * FROM admin');
    return result.rows;
  }

  async create({ name, gmail, password }: { name: string; gmail: string; password: string }) {
    const hashedPassword = await bcrypt.hash(password, 10);
    await client.query('INSERT INTO admin (name, gmail, password) VALUES ($1, $2, $3)', [
      name,
      gmail,
      hashedPassword,
    ]);
  }
}
