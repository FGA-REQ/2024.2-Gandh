import { getAll, create } from '../repositories/adminRepository.js';

const listarAdmins = async (req, res) => {
  try {
    const admins = await getAll();
    res.status(200).json(admins);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar admins' });
  }
};

const criarAdmin = async (req, res) => {
  const { name, gmail, password} = req.body;
  try {
    await create({ name, gmail, password });
    res.status(201).json({ message: 'Admin criado com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar admin' });
  }
};

export { listarAdmins, criarAdmin };
