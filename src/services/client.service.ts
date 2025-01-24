import { Injectable } from '@nestjs/common';
import { ClientRepository } from '../repositories/client.repository';

@Injectable()
export class ClientService {
  constructor(private readonly clientRepository: ClientRepository) {}

  async getAll() {
    return this.clientRepository.getAll();
  }

  async create(client: { name: string; gmail: string; phone: string; address: string; password: string }) {
    await this.clientRepository.create(client);
  }
}
