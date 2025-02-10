import { Test, TestingModule } from '@nestjs/testing';
import { AuthAdminController } from 'src/controllers/auth.admin.controller';
import { AuthService } from '../services/auth.service';
import { AdminService } from '../services/admin.service';
import { HttpException, HttpStatus } from '@nestjs/common';
import { client } from '../../db/db';

describe('AuthAdminController', () => {
  let controller: AuthAdminController;
  let adminService: AdminService;
  let authService: AuthService;

  const mockAdminService = {
    checkLogIn: jest.fn(),
  };

  const mockAuthService = {
    generateTokenJWT: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthAdminController],
      providers: [
        {
          provide: AdminService,
          useValue: mockAdminService,
        },
        {
          provide: AuthService,
          useValue: mockAuthService,
        },
      ],
    }).compile();

    controller = module.get<AuthAdminController>(AuthAdminController);
    adminService = module.get<AdminService>(AdminService);
    authService = module.get<AuthService>(AuthService);
  });

    afterAll(async () => {
        await client.end();
    });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('realizarLogIn', () => {
    it('should return a token if login is successful', async () => {
      const loginDto = { gmail: 'test@example.com', password: 'password123' };
      const mockAdmin = { id: 1, gmail: 'test@example.com' };
      const mockToken = 'mockToken';

      mockAdminService.checkLogIn.mockResolvedValue(mockAdmin);
      mockAuthService.generateTokenJWT.mockResolvedValue(mockToken);

      const result = await controller.realizarLogIn(loginDto);

      expect(result).toEqual({
        statusCode: HttpStatus.OK,
        message: 'Login realizado com êxito!',
        token: mockToken,
      });
      expect(adminService.checkLogIn).toHaveBeenCalledWith(loginDto);
      expect(authService.generateTokenJWT).toHaveBeenCalledWith(mockAdmin);
    });

    it('should throw an exception if login fails', async () => {
      const loginDto = { gmail: 'test@example.com', password: 'wrongPassword' };

      mockAdminService.checkLogIn.mockRejectedValue(new Error('Invalid credentials'));

      await expect(controller.realizarLogIn(loginDto)).rejects.toThrow(
        new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED),
      );
    });
  });
});