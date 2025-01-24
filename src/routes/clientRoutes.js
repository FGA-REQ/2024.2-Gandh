import express from 'express';
import { listarClientes, criarCliente } from '../controllers/clientController.js'; // Importação nomeada

const router = express.Router();

// Rota para listar todos os clientes
router.get('/', listarClientes);

// Rota para criar um cliente
router.post('/', criarCliente);

export default router; // Usando export default para o roteador
