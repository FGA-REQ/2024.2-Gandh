import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { ClientRepository } from '../repositories/client.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class ClientService {
  constructor(private readonly clientRepository: ClientRepository) {}

  async getAll() {
    return this.clientRepository.getAll();
  }

  async create(client: { name: string; gmail: string; phone: string; address: string; password: string }) {
    await this.clientRepository.create(client);
  }

  async checkLogIn(credentials: {gmail: string, password: string}) {
    const client = await this.clientRepository.findOneByEmail(credentials.gmail);

    if(credentials.gmail == null) {
      throw new BadRequestException('O campo do email deve ser preenchido!');
    }

    if(credentials.password == null) {
      throw new BadRequestException('O campo da senha deve ser preenchido!');
    }

    if(!client) {
      throw new UnauthorizedException('Usuário não encontrado! Verifique se o email está correto.');
    }

    const isPasswordValid = await bcrypt.compare(credentials.password, client.password);
    if(!isPasswordValid) {
      throw new UnauthorizedException('Senha inválida!');
    }

    return client;
  }
}
