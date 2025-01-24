import {client} from '../../db/db.js';
import bcrypt from 'bcrypt';

const getAll = async () => {
  const result = await client.query('SELECT * FROM client');
  return result.rows;
};

const create = async ({ name, gmail, phone, address, password }) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  await client.query('INSERT INTO client (name, gmail, phone, address, password) VALUES ($1, $2, $3, $4, $5)', [name, gmail, phone, address, hashedPassword]);
};

export { getAll, create };
