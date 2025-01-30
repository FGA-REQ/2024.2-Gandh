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
    // Gera um hash da senha fornecida
    const hashedPassword = await bcrypt.hash(password, 10);
    // Insere um novo registro na tabela 'admin' com o nome, gmail e a senha hash
    await client.query('INSERT INTO admin (name, gmail, password) VALUES ($1, $2, $3)', [
      name,
      gmail,
      hashedPassword,
    ]);
  }

  async findOneByEmail(gmail: string) {
    // Executa uma consulta SQL para selecionar todos os registros da tabela 'client' onde o campo 'gmail' corresponde ao valor fornecido
    const result = await client.query('SELECT * FROM client WHERE gmail = $1', [gmail]);
    // Retorna a primeira linha do resultado da consulta
    return result.rows[0];
  }
}
