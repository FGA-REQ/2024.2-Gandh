import {client} from '../../db/db.js';
import bcrypt from 'bcrypt';     

const getAll = async () => {
  const result = await client.query('SELECT * FROM admin');
  return result.rows;
};

const create = async ({ name, gmail, password }) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  await client.query('INSERT INTO admin (name, gmail, password) VALUES ($1, $2, $3)', [name, gmail, hashedPassword]);
};

export { getAll, create };
