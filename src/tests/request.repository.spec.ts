import { Test, TestingModule } from '@nestjs/testing';
import { RequestRepository } from 'src/repositories/request.repository';
import { client } from '../../db/db';

jest.mock('../../db/db', () => ({
  client: {
    query: jest.fn(),
    end: jest.fn(),
  },
}));

describe('RequestRepository', () => {
  let repository: RequestRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RequestRepository],
    }).compile();

    repository = module.get<RequestRepository>(RequestRepository);
  });

  afterAll(async () => {
    await client.end();
  });

  it('deve ser definido', () => {
    expect(repository).toBeDefined();
  });

  describe('createOrder', () => {
    it('deve criar um novo pedido', async () => {
      await repository.createOrder(1, 'Test Address', 1, 'Test Order Details');

      expect(client.query).toHaveBeenCalledWith('SELECT create_order($1, $2, $3, $4)', [1, 'Test Address', 1, 'Test Order Details']);
    });
  });

  describe('getActiveRequests', () => {
    it('deve retornar todos os pedidos ativos', async () => {
      const mockRequests = [{ id: 1, name: 'Test Request' }];
      (client.query as jest.Mock).mockResolvedValue({ rows: mockRequests });

      const result = await repository.getActiveRequests();

      expect(client.query).toHaveBeenCalledWith('SELECT * FROM request');
      expect(result).toEqual(mockRequests);
    });
  });

  describe('completeRequest', () => {
    it('deve completar um pedido pelo id', async () => {
      await repository.completeRequest(1);

      expect(client.query).toHaveBeenCalledWith('UPDATE request SET is_completed = TRUE WHERE id_request = $1', [1]);
    });
  });

  describe('getOrderDetails', () => {
    it('deve retornar os detalhes de um pedido pelo id', async () => {
      const mockOrderDetails = [{ id: 1, name: 'Test Order Details' }];
      (client.query as jest.Mock).mockResolvedValue({ rows: mockOrderDetails });

      const result = await repository.getOrderDetails(1);

      expect(client.query).toHaveBeenCalledWith('SELECT * FROM get_order_details($1)', [1]);
      expect(result).toEqual(mockOrderDetails);
    });
  });
});