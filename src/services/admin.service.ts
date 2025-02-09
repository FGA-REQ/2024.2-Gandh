import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { AdminRepository } from '../repositories/admin.repository';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AdminService {
  constructor(private readonly adminRepository: AdminRepository) {}

  async getAll() {
    return this.adminRepository.getAll();
  }

  async create(admin: { name: string; gmail: string; password: string }) {
    await this.adminRepository.create(admin);
  }

  async checkLogIn(credentials: {gmail: string, password: string}) {
    const admin = await this.adminRepository.findOneByEmail(credentials.gmail);

    if(credentials.gmail == null) {
      throw new BadRequestException('O campo do email deve ser preenchido!');
    }

    if(credentials.password == null) {
      throw new BadRequestException('O campo da senha deve ser preenchido!');
    }

    if(!admin) {
      throw new UnauthorizedException('Usuário não encontrado! Verifique se o email está correto.');
    }

    const isPasswordValid = await bcrypt.compare(credentials.password, admin.password);
    if(!isPasswordValid) {
      throw new UnauthorizedException('Senha inválida!');
    }

    return admin;
  }
}
