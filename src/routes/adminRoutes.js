import express from 'express';
import { listarAdmins, criarAdmin } from '../controllers/adminController.js';

const router = express.Router();

// Rota para listar todos os admins
router.get('/', listarAdmins);

// Rota para criar um cliente
router.post('/', criarAdmin);

export default router;
