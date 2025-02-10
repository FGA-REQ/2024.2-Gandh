import { Controller, Get, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { AdminService } from '../services/admin.service';

@Controller('admins')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get()
  async listarAdmins() {
    try {
      return await this.adminService.getAll();
    } catch (error) {
      throw new HttpException('Erro ao buscar admins', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post()
  async criarAdmin(@Body() body: { name: string; gmail: string; password: string }) {
    try {
      await this.adminService.create(body);
      return { message: 'Admin criado com sucesso' };
    } catch (error) {
      throw new HttpException('Erro ao criar admin', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
