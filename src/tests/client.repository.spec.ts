import { Test, TestingModule } from '@nestjs/testing';
import { ClientRepository } from 'src/repositories/client.repository';
import { client } from '../../db/db';

jest.mock('../../db/db', () => ({
  client: {
    query: jest.fn(),
    end: jest.fn(),
  },
}));

describe('ClientRepository', () => {
  let repository: ClientRepository;
  let originalConsoleError: any;

  beforeAll(() => {
    originalConsoleError = console.error;
    console.error = jest.fn();
  });

  afterAll(async() => {
    console.error = originalConsoleError;
    await client.end();
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClientRepository],
    }).compile();

    repository = module.get<ClientRepository>(ClientRepository);
  });

  it('deve ser definido', () => {
    expect(repository).toBeDefined();
  });

  describe('getAll', () => {
    it('deve retornar todos os clientes', async () => {
      const mockClients = [{ id: 1, name: 'Test Client' }];
      (client.query as jest.Mock).mockResolvedValue({ rows: mockClients });

      const result = await repository.getAll();

      expect(client.query).toHaveBeenCalledWith('SELECT * FROM client');
      expect(result).toEqual(mockClients);
    });
  });

  describe('create', () => {
    it('deve criar um novo cliente', async () => {
      const clientData = { name: 'New Client', gmail: 'test@example.com', phone: '123456789', password: 'password123' };

      await repository.create(clientData);

      expect(client.query).toHaveBeenCalledWith(
        'INSERT INTO client (name, gmail, phone,password) VALUES ($1, $2, $3, $4)',
        [clientData.name, clientData.gmail, clientData.phone, clientData.password],
      );
    });

    it('deve lançar um erro se a criação do cliente falhar', async () => {
        const clientData = { name: 'New Client', gmail: 'test@example.com', phone: '123456789', password: 'password123' };
        const dbError = new Error('Database error');
        (client.query as jest.Mock).mockRejectedValue(dbError);
  
        await expect(repository.create(clientData)).rejects.toThrowError('Erro ao criar cliente no banco de dados'); // Expect the custom message
    });
  });

  describe('findOneByEmail', () => {
    it('deve retornar um cliente por email', async () => {
      const mockClient = { id: 1, name: 'Test Client', gmail: 'test@example.com' };
      (client.query as jest.Mock).mockResolvedValue({ rows: [mockClient] });

      const result = await repository.findOneByEmail('test@example.com');

      expect(client.query).toHaveBeenCalledWith('SELECT * FROM client WHERE gmail = $1', ['test@example.com']);
      expect(result).toEqual(mockClient);
    });
  });

  describe('findOneById', () => {
    it('deve retornar um cliente por id', async () => {
      const mockClient = { id: 1, name: 'Test Client' };
      (client.query as jest.Mock).mockResolvedValue({ rows: [mockClient] });

      const result = await repository.findOneById(1);

      expect(client.query).toHaveBeenCalledWith('SELECT * FROM client WHERE id = $1', [1]);
      expect(result).toEqual(mockClient);
    });
  });

  describe('updateFidelity', () => {
    it('deve atualizar a fidelidade do cliente', async () => {
      await repository.updateFidelity(1, 10);

      expect(client.query).toHaveBeenCalledWith('SELECT update_fidelity($1, $2)', [1, 10]);
    });
  });

  describe('updateFields', () => {
    it('deve atualizar os campos do cliente', async () => {
      const updateData = { name: 'Updated Name', phone: '987654321' };

      await repository.updateFields(1, updateData);

      expect(client.query).toHaveBeenCalledWith(
        `
        UPDATE client
        SET name = $1, phone = $2
        WHERE id = $3
      `,
        ['Updated Name', '987654321', 1],
      );
    });

    it('deve lidar com atualizações parciais', async () => {
      const updateData = { name: 'Updated Name' };

      await repository.updateFields(1, updateData);

      expect(client.query).toHaveBeenCalledWith(
        `
        UPDATE client
        SET name = $1
        WHERE id = $2
      `,
        ['Updated Name', 1],
      );
    });

    it('deve lançar um erro se a atualização falhar', async () => {
      const updateData = { name: 'Updated Name' };
      (client.query as jest.Mock).mockRejectedValue(new Error('Database error'));

      await expect(repository.updateFields(1, updateData)).rejects.toThrowError('Erro ao atualizar o cliente no banco de dados');
    });
  });
});