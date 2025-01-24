import express from 'express';
import clientRoutes from './routes/clientRoutes.js';
import adminRoutes from './routes/adminRoutes.js';

const app = express();

app.use(express.json()); 

// Rotas para clientes
app.use('/clients', clientRoutes);

// Rotas para admins
app.use('/admins', adminRoutes);

export  default  app;
