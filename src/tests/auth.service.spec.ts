import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from 'src/services/auth.service';
import { JwtService } from '@nestjs/jwt';

// Mock do JwtService
const mockJwtService = {
  sign: jest.fn().mockReturnValue('mockToken'),
};

describe('AuthService', () => {
  let authService: AuthService;
  let jwtService: JwtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: JwtService, useValue: mockJwtService }, // Mockando JwtService
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
    jwtService = module.get<JwtService>(JwtService);

    jest.clearAllMocks();
  });

  it('deve estar definido', () => {
    expect(authService).toBeDefined();
  });

  describe('generateTokenJWT', () => {
    it('deve retornar um token JWT válido', async () => {
      const clientMock = {
        id: 1,
        gmail: 'user@example.com',
      };

      const result = await authService.generateTokenJWT(clientMock);
      
      expect(result).toBe('mockToken');
      expect(jwtService.sign).toHaveBeenCalledTimes(1);
    });

    it('deve chamar o JwtService com o payload correto', async () => {
      const clientMock = {
        id: 123,
        gmail: 'test@example.com',
      };

      await authService.generateTokenJWT(clientMock);

      expect(jwtService.sign).toHaveBeenCalledWith({
        sub: clientMock.id,
        email: clientMock.gmail,
      });
    });
  });
});