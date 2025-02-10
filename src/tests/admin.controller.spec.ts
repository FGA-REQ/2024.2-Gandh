import { Test, TestingModule } from '@nestjs/testing';
import { AdminController } from 'src/controllers/admin.controller';
import { AdminService } from 'src/services/admin.service';
import { HttpException, HttpStatus } from '@nestjs/common';

describe('AdminController', () => {
  let controller: AdminController;
  let service: AdminService;

  const mockAdminService = {
    getAll: jest.fn(),
    create: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminController],
      providers: [
        {
          provide: AdminService,
          useValue: mockAdminService,
        },
      ],
    }).compile();

    controller = module.get<AdminController>(AdminController);
    service = module.get<AdminService>(AdminService);
  });

  it('deve ser definido', () => {
    expect(controller).toBeDefined();
  });

  describe('listarAdmins', () => {
    it('deve retornar uma lista de admins', async () => {
      const mockAdmins = [{ id: 1, name: 'Test Admin' }];
      mockAdminService.getAll.mockResolvedValue(mockAdmins);

      const result = await controller.listarAdmins();

      expect(result).toEqual(mockAdmins);
      expect(service.getAll).toHaveBeenCalled();
    });

    it('deve lançar uma exceção se ocorrer um erro', async () => {
      mockAdminService.getAll.mockRejectedValue(new Error('Erro ao buscar admins'));

      await expect(controller.listarAdmins()).rejects.toThrow(
        new HttpException('Erro ao buscar admins', HttpStatus.INTERNAL_SERVER_ERROR),
      );
    });
  });

  describe('criarAdmin', () => {
    it('deve criar um novo admin', async () => {
      const adminData = { name: 'New Admin', gmail: 'test@example.com', password: 'password123' };

      const result = await controller.criarAdmin(adminData);

      expect(result).toEqual({ message: 'Admin criado com sucesso' });
      expect(service.create).toHaveBeenCalledWith(adminData);
    });

    it('deve lançar uma exceção se ocorrer um erro', async () => {
      const adminData = { name: 'New Admin', gmail: 'test@example.com', password: 'password123' };
      mockAdminService.create.mockRejectedValue(new Error('Erro ao criar admin'));

      await expect(controller.criarAdmin(adminData)).rejects.toThrow(
        new HttpException('Erro ao criar admin', HttpStatus.INTERNAL_SERVER_ERROR),
      );
    });
  });
});