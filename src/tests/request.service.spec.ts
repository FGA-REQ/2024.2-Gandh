import { Test, TestingModule } from '@nestjs/testing';
import { RequestService } from '../services/request.service';
import { RequestRepository } from '../repositories/request.repository';
import { BadRequestException } from '@nestjs/common';
import { client } from '../../db/db';

describe('RequestService', () => {
  let requestService: RequestService;
  let requestRepository: RequestRepository;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [
        RequestService,
        {
          provide: RequestRepository,
          useValue: {
            createOrder: jest.fn().mockResolvedValue({ id: 100, message: 'Pedido criado' }),
            getActiveRequests: jest.fn().mockResolvedValue([{ id: 1 }, { id: 2 }]),
            completeRequest: jest.fn().mockResolvedValue(true),
            getOrderDetails: jest.fn().mockResolvedValue({ id: 1, details: 'Detalhes do pedido' }),
          },
        },
      ],
    }).compile();

    requestService = moduleRef.get<RequestService>(RequestService);
    requestRepository = moduleRef.get<RequestRepository>(RequestRepository);
  });
  afterEach(() => {
    jest.useRealTimers();
    jest.clearAllMocks();
  });
  afterAll(async () => {
    await client.end();
  });

  describe('createOrder', () => {
    it('deve lançar BadRequestException se o horário for antes do funcionamento (ex.: 17:59)', async () => {
      // Simula horário antes do início: 17:59
      jest.useFakeTimers().setSystemTime(new Date('2025-02-09T17:59:00'));

      const promise = requestService.createOrder(1, 'Rua A, 123', 2, 'Detalhes do pedido');
      
      await expect(promise)
        .rejects
        .toThrow(BadRequestException);

      await expect(promise)
        .rejects
        .toThrow('Pedidos só podem ser realizados entre 18:00 e 23:00.');
    });

    it('deve lançar BadRequestException se o horário for às 23:00 ou posterior', async () => {
      // Simula horário exatamente às 23:00
      jest.useFakeTimers().setSystemTime(new Date('2025-02-09T23:00:00'));
      
      await expect(
        requestService.createOrder(1, 'Rua A, 123', 2, 'Detalhes do pedido')
      ).rejects.toThrow(BadRequestException);

      // Simula horário depois das 23:00 (ex.: 23:30)
      jest.useFakeTimers().setSystemTime(new Date('2025-02-09T23:30:00'));

      await expect(
        requestService.createOrder(1, 'Rua A, 123', 2, 'Detalhes do pedido')
      ).rejects.toThrow(BadRequestException);
    });

    it('deve criar o pedido se o horário estiver dentro do funcionamento (18:00 até 22:59)', async () => {
      // Horário no início do período (18:00)
      jest.useFakeTimers().setSystemTime(new Date('2025-02-09T18:00:00'));

      const resultInicio = await requestService.createOrder(1, 'Rua A, 123', 2, 'Detalhes do pedido');
      expect(resultInicio).toEqual({ id: 100, message: 'Pedido criado' });
      expect(requestRepository.createOrder).toHaveBeenCalledWith(1, 'Rua A, 123', 2, 'Detalhes do pedido');

      // Horário no final do período (22:59)
      jest.useFakeTimers().setSystemTime(new Date('2025-02-09T22:59:00'));

      const resultFim = await requestService.createOrder(1, 'Rua A, 123', 2, 'Detalhes do pedido');
      expect(resultFim).toEqual({ id: 100, message: 'Pedido criado' });
      expect(requestRepository.createOrder).toHaveBeenCalledWith(1, 'Rua A, 123', 2, 'Detalhes do pedido');
    });
  });

  describe('getActiveRequests', () => {
    it('deve retornar os pedidos ativos', async () => {
      const activeRequests = await requestService.getActiveRequests();
      expect(requestRepository.getActiveRequests).toHaveBeenCalled();
      expect(activeRequests).toEqual([{ id: 1 }, { id: 2 }]);
    });
  });

  describe('completeRequest', () => {
    it('deve completar o pedido e retornar true', async () => {
      const result = await requestService.completeRequest(1);
      expect(requestRepository.completeRequest).toHaveBeenCalledWith(1);
      expect(result).toBe(true);
    });
  });

  describe('getOrderDetails', () => {
    it('deve retornar os detalhes do pedido', async () => {
      const details = await requestService.getOrderDetails(1);
      expect(requestRepository.getOrderDetails).toHaveBeenCalledWith(1);
      expect(details).toEqual({ id: 1, details: 'Detalhes do pedido' });
    });
  });
});
