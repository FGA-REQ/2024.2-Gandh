import * as bcrypt from 'bcrypt'; // Alterado para namespace import
import { client } from '../../db/db';
import { AdminRepository } from 'src/repositories/admin.repository';

jest.mock('../../db/db', () => ({
  client: {
    query: jest.fn(),
  },
}));

jest.mock('bcrypt', () => ({
  hash: jest.fn().mockResolvedValue('hashed_password'),
}));

describe('AdminRepository', () => {
    let repository: AdminRepository;

    beforeEach(() => {
        repository = new AdminRepository();
        jest.clearAllMocks();
    });

    describe('getAll', () => {
        it('deve retornar todos os administradores', async () => {
        const mockAdmins = [{ id: 1, name: 'Admin Test' }];
        (client.query as jest.Mock).mockResolvedValueOnce({ rows: mockAdmins });

        const result = await repository.getAll();

        expect(client.query).toHaveBeenCalledWith('SELECT * FROM admin');
        expect(result).toEqual(mockAdmins);
        });
    });

    describe('create', () => {
        it('deve criar um novo administrador com senha criptografada', async () => {
        const adminData = {
            name: 'New Admin',
            gmail: 'admin@test.com',
            password: 'plain_password',
        };

        await repository.create(adminData);

        expect(bcrypt.hash).toHaveBeenCalledWith('plain_password', 10);
        expect(client.query).toHaveBeenCalledWith(
            'INSERT INTO admin (name, gmail, password) VALUES ($1, $2, $3)',
            [adminData.name, adminData.gmail, 'hashed_password']
        );
        });
    });

    describe('findOneByEmail', () => {
        it('deve buscar um cliente por email (observação: possível erro na tabela)', async () => {
        const email = 'user@test.com';
        const mockClient = { id: 1, email };
        (client.query as jest.Mock).mockResolvedValueOnce({ rows: [mockClient] });

        const result = await repository.findOneByEmail(email);

        expect(client.query).toHaveBeenCalledWith(
            'SELECT * FROM client WHERE gmail = $1',
            [email]
        );
        expect(result).toEqual(mockClient);
        });

        it('deve retornar undefined quando nenhum cliente for encontrado', async () => {
        (client.query as jest.Mock).mockResolvedValueOnce({ rows: [] });

        const result = await repository.findOneByEmail('inexistente@test.com');

        expect(result).toBeUndefined();
        });
    });
});