import { Test, TestingModule } from '@nestjs/testing';
import { AdminService } from 'src/services/admin.service';
import { AdminRepository } from '../repositories/admin.repository';
import { BadRequestException, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { client } from '../../db/db';

// Mock do AdminRepository
const mockAdminRepository = {
  getAll: jest.fn(),
  create: jest.fn(),
  findOneByEmail: jest.fn(),
};

// Mock do bcrypt
jest.mock('bcrypt', () => ({
  compare: jest.fn().mockResolvedValue(true),
}));

describe('AdminService', () => {
  let service: AdminService;
  let adminRepository: AdminRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AdminService,
        { provide: AdminRepository, useValue: mockAdminRepository },
      ],
    }).compile();

    service = module.get<AdminService>(AdminService);
    adminRepository = module.get<AdminRepository>(AdminRepository);
  });

    afterEach(() => {
        jest.clearAllMocks();
        jest.resetModules();
    });

    afterAll(async () => {
        await client.end();
    });

  describe('getAll', () => {
    it('deve retornar todos os administradores', async () => {
      const mockAdmins = [{ id: 1, name: 'Admin Teste' }];
      mockAdminRepository.getAll.mockResolvedValue(mockAdmins);

      const result = await service.getAll();
      
      expect(result).toEqual(mockAdmins);
      expect(adminRepository.getAll).toHaveBeenCalledTimes(1);
    });
  });

  describe('create', () => {
    it('deve criar um novo administrador', async () => {
      const mockAdmin = {
        name: 'Novo Admin',
        gmail: 'novo@admin.com',
        password: 'senha123',
      };

      await service.create(mockAdmin);
      
      expect(adminRepository.create).toHaveBeenCalledWith(mockAdmin);
      expect(adminRepository.create).toHaveBeenCalledTimes(1);
    });
  });

  describe('checkLogIn', () => {
    it('deve lançar erro se email for null', async () => {
      const credentials = { gmail: null as any, password: 'senha123' };

      await expect(service.checkLogIn(credentials)).rejects.toThrow(BadRequestException);
      await expect(service.checkLogIn(credentials)).rejects.toThrow('O campo do email deve ser preenchido!');
    });

    it('deve lançar erro se senha for null', async () => {
      const credentials = { gmail: 'admin@teste.com', password: null as any };

      await expect(service.checkLogIn(credentials)).rejects.toThrow(BadRequestException);
      await expect(service.checkLogIn(credentials)).rejects.toThrow('O campo da senha deve ser preenchido!');
    });

    it('deve lançar erro se email estiver vazio', async () => {
      const credentials = { gmail: '', password: 'senha123' };
      
      await expect(service.checkLogIn(credentials)).rejects.toThrow(BadRequestException);
      await expect(service.checkLogIn(credentials)).rejects.toThrow('O campo do email deve ser preenchido!');
    });

    it('deve lançar erro se senha estiver vazia', async () => {
      const credentials = { gmail: 'admin@teste.com', password: '' };
      
      await expect(service.checkLogIn(credentials)).rejects.toThrow(BadRequestException);
      await expect(service.checkLogIn(credentials)).rejects.toThrow('O campo da senha deve ser preenchido!');
    });

    it('deve lançar erro se administrador não existir', async () => {
      const credentials = { gmail: 'inexistente@teste.com', password: 'senha123' };
      mockAdminRepository.findOneByEmail.mockResolvedValue(null);

      await expect(service.checkLogIn(credentials)).rejects.toThrow(UnauthorizedException);
    });

    it('deve lançar erro se senha estiver incorreta', async () => {
      const credentials = { gmail: 'admin@teste.com', password: 'senhaErrada' };
      const mockAdmin = { 
        id: 1, 
        gmail: 'admin@teste.com', 
        password: 'hashSenhaCorreta' 
      };
      
      mockAdminRepository.findOneByEmail.mockResolvedValue(mockAdmin);
      (bcrypt.compare as jest.Mock).mockResolvedValue(false);

      await expect(service.checkLogIn(credentials)).rejects.toThrow(UnauthorizedException);
    });

    it('deve retornar administrador se credenciais estiverem corretas', async () => {
      const credentials = { gmail: 'admin@teste.com', password: 'senhaCorreta' };
      const mockAdmin = { 
        id: 1, 
        gmail: 'admin@teste.com', 
        password: 'hashSenhaCorreta' 
      };
      
      mockAdminRepository.findOneByEmail.mockResolvedValue(mockAdmin);
      (bcrypt.compare as jest.Mock).mockResolvedValue(true);

      const result = await service.checkLogIn(credentials);
      
      expect(result).toEqual(mockAdmin);
      expect(adminRepository.findOneByEmail).toHaveBeenCalledWith(credentials.gmail);
      expect(bcrypt.compare).toHaveBeenCalledWith(credentials.password, mockAdmin.password);
    });
  });
});