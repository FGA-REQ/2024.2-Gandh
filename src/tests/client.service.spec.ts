import { Test , TestingModule } from '@nestjs/testing';
import { ClientService } from '../services/client.service';
import { ClientRepository } from '../repositories/client.repository';
import { BadRequestException, UnauthorizedException, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { client } from '../../db/db';

const mockClientRepository = {
    getAll: jest.fn(),
    create: jest.fn(),
    findOneByEmail: jest.fn(),
    findOneById: jest.fn(),
    updateFidelity: jest.fn(),
    updateFields: jest.fn(),
};

jest.mock('bcrypt', () => ({
    hash: jest.fn().mockResolvedValue('hashed_password'),
    compare: jest.fn().mockResolvedValue(true),
}));

describe('ClientService', () => {
    let service: ClientService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                ClientService,
                { provide: ClientRepository, useValue: mockClientRepository },
            ],
        }).compile();

        service = module.get<ClientService>(ClientService);
    });

    afterEach(() => {
        jest.clearAllMocks();
        jest.resetModules();
    });

    afterAll(async () => {
        await client.end(); // Fecha a conexão com o banco de dados após todos os testes
    });

    describe('getAll', () => {
        it('deve retornar uma lista vazia quando não houver clientes no banco', async() => {
            mockClientRepository.getAll.mockResolvedValue([]);

            const result = await service.getAll();
            
            expect(result).toEqual([]);
            expect(mockClientRepository.getAll).toHaveBeenCalledTimes(1);
            expect(mockClientRepository.getAll).toHaveBeenCalledWith();
        });

        it('deve retornar uma lista de clientes com os dados corretos', async() => {
            const mockClients = [
                {id: 1, name: 'cliente 1', gmail: 'cliente1@gmail.com'},
                {id: 2, name: 'cliente 2', gmail: 'cliente2@gmail.com'}
            ];

            mockClientRepository.getAll.mockResolvedValue(mockClients);

            const result = await service.getAll();

            expect(result).toEqual(mockClients);
            expect(result).toHaveLength(2);
            expect(result[0].gmail).toBe('cliente1@gmail.com');
        });
    }); 

    describe('create', () => {
        it('deve lançar um erro caso o email já está cadastrado', async() => {
            mockClientRepository.findOneByEmail.mockResolvedValue({
                id: 1,
                gmail: 'cliente.existe@teste.com'
            });

            await expect(
                service.create({
                    name: 'cliente', 
                    gmail: 'cliente.existe@teste.com',
                    phone: '11999999999',
                    password: 'senha123',
                })
            ).rejects.toThrow(BadRequestException);
        });
    });
});

