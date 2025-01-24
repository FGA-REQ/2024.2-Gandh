import { Injectable } from '@nestjs/common';
import { AdminRepository } from '../repositories/admin.repository';

@Injectable()
export class AdminService {
  constructor(private readonly adminRepository: AdminRepository) {}

  async getAll() {
    return this.adminRepository.getAll();
  }

  async create(admin: { name: string; gmail: string; password: string }) {
    await this.adminRepository.create(admin);
  }
}
