import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from 'src/controllers/auth.controller';
import { AuthService } from 'src/services/auth.service';
import { ClientService } from 'src/services/client.service';
import { HttpException, HttpStatus } from '@nestjs/common';
import { client } from '../../db/db';

describe('AuthController', () => {
  let authController: AuthController;
  let clientService: ClientService;
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: ClientService,
          useValue: {
            checkLogIn: jest.fn(),
          },
        },
        {
          provide: AuthService,
          useValue: {
            generateTokenJWT: jest.fn(),
          },
        },
      ],
    }).compile();

    authController = module.get<AuthController>(AuthController);
    clientService = module.get<ClientService>(ClientService);
    authService = module.get<AuthService>(AuthService);
  });

  afterAll(async () => {
    await client.end();
});


  it('should be defined', () => {
    expect(authController).toBeDefined();
  });

  describe('realizarLogIn', () => {
    it('should return a token if login is successful', async () => {
      const body = { gmail: 'client@gmail.com', password: 'password' };
      const client = { id: 1, gmail: 'client@gmail.com' };
      const token = 'jwt-token';

      jest.spyOn(clientService, 'checkLogIn').mockResolvedValue(client);
      jest.spyOn(authService, 'generateTokenJWT').mockResolvedValue(token);

      const result = await authController.realizarLogIn(body);

      expect(result).toEqual({
        statusCode: HttpStatus.OK,
        message: 'Login realizado com êxito!',
        token,
      });
    });

    it('should throw an exception if login fails', async () => {
      const body = { gmail: 'client@gmail.com', password: 'wrong-password' };

      jest.spyOn(clientService, 'checkLogIn').mockRejectedValue(new Error('Invalid credentials'));

      await expect(authController.realizarLogIn(body)).rejects.toThrow(
        new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED),
      );
    });
  });
});