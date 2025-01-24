import { getAll, create } from '../repositories/clientRepository.js'; 

const listarClientes = async (req, res) => {
  try {
    const clientes = await getAll();
    res.status(200).json(clientes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar clientes' });
  }
};

const criarCliente = async (req, res) => {
  const { name, gmail, phone, address, password } = req.body; 
  try {
    await create({ name, gmail, phone, address, password });
    res.status(201).json({ message: 'Cliente criado com sucesso' }); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar cliente' });
  }
};

export { listarClientes, criarCliente }; 
