import { Controller, Get, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { ClientService } from '../services/client.service';

@Controller('clients')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get()
  async listarClientes() {
    try {
      return await this.clientService.getAll();
    } catch (error) {
      throw new HttpException('Erro ao buscar clientes', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post()
  async criarCliente(@Body() body: { name: string; gmail: string; phone: string; address: string; password: string }) {
    try {
      await this.clientService.create(body);
      return { message: 'Cliente criado com sucesso' };
    } catch (error) {
      throw new HttpException('Erro ao criar cliente', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
