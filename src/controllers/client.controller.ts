import { Controller, Get, Post, Body, HttpException, HttpStatus, Param, Put } from '@nestjs/common';
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
      throw new HttpException(error.message , HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(':id/fidelity')
  async getFidelity(@Param('id') id: number) {
    try {
      const fidelity = await this.clientService.getFidelity(id);
      return { fidelity };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Put(':id/fidelity')
  async addFidelity(@Param('id') id: number, @Body('points') points: number) {
    try {
      await this.clientService.addFidelity(id, points);
      return { message: 'Pontos de fidelidade adicionados com sucesso' };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}