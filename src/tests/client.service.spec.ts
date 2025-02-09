import { Test , TestingModule } from '@nestjs/testing';
import { ClientService } from '../services/client.service';
import { ClientRepository } from '../repositories/client.repository';
import { BadRequestException, UnauthorizedException, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { client } from '../../db/db';
import { ClientProfileDTO } from 'src/dtos/client-profile.dto';

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
        await client.end();
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

        it('deve criar com êxito um cliente com senha hasheada', async() => {
            mockClientRepository.findOneByEmail.mockResolvedValue(null);
            mockClientRepository.create.mockResolvedValue({id : 1});

            await service.create({
                name: 'cliente',
                gmail: 'cliente@gmail.com',
                phone: '11999999999',
                password: 'senha123',
            });

            expect(bcrypt.hash).toHaveBeenCalledWith('senha123', 10);
            expect(mockClientRepository.create).toHaveBeenCalledWith({
                name: 'cliente',
                gmail: 'cliente@gmail.com',
                phone: '11999999999',
                password: 'hashed_password',
            })
        })
    });

    describe('checkLogIn', () => {
        it('deve lançar um erro se o email estiver vazio', async() => {
            await expect(async() => {
                await service.checkLogIn({gmail: '', password: 'senha'});
            }).rejects.toThrow(UnauthorizedException);
        });

        it('deve lançar um erro se a senha estiver vazia', async() => {
            await expect(async() => {
                await service.checkLogIn({gmail: 'cliente@gmail.com', password: ''});
            }).rejects.toThrow(UnauthorizedException);
        });

        it('deve lançar erro se o usuário não existe', async() => {
            mockClientRepository.findOneByEmail.mockResolvedValue(null);

            await expect(async() => {
                await service.checkLogIn({ gmail: 'cliente@gmail.com', password: 'senha123'});
            }).rejects.toThrow(UnauthorizedException);
        });

        it('deve retornar usuário com as credenciais corretas', async() => {
            const mockClient = { id: 1, gmail: 'cliente@gmail.com', password: 'hashed_password' };
            mockClientRepository.findOneByEmail.mockResolvedValue(mockClient);
            (bcrypt.compare as jest.Mock).mockResolvedValue(true);

            const result = await service.checkLogIn({gmail: 'cliente@gmail.com', password: 'senha123'});
            expect(result).toEqual(mockClient);
        });

        it('deve retornar erro se a senha for inválida', async() => {
            const mockClient = { id: 1, gmail: 'cliente@gmail.com', password: 'hashed_password' };
            mockClientRepository.findOneByEmail.mockResolvedValue(mockClient);
            (bcrypt.compare as jest.Mock).mockResolvedValue(false);

            await expect(async() => {
                await service.checkLogIn({ gmail: 'cliente@gmail.com', password: 'senha123'});
            }).rejects.toThrow(UnauthorizedException);
        });
    });

    describe('getFidelity', () => {
        it('deve lançar erro se o cliente não existe', async() => {
            mockClientRepository.findOneById.mockResolvedValue(null);

            await expect(
                service.getFidelity(9999)
            ).rejects.toThrow(NotFoundException);
        });

        it('deve retornar os pontos de fidelidade', async() => {
            mockClientRepository.findOneById.mockResolvedValue({id: 1, fidelity: 10});
            const result = await service.getFidelity(1);

            expect(result).toBe(10);
        });
    });

    describe('addFidelity', () => {
        it('deve lançar erro se o cliente não existe', async() => {
            mockClientRepository.findOneById.mockResolvedValue(null);

            await expect(
                service.addFidelity(9999, 1)
            ).rejects.toThrow(NotFoundException);
        });

        it('deve atualizar os pontos de fidelidade', async() => {
            mockClientRepository.findOneById.mockResolvedValue({id: 1, fidelity: 10});
            mockClientRepository.updateFidelity.mockResolvedValue(undefined);

            const result = await service.addFidelity(1, 2);

            expect(mockClientRepository.findOneById).toHaveBeenCalledWith(1);
            expect(mockClientRepository.updateFidelity).toHaveBeenCalledWith(1, 12);
        });
    });

    describe('seeProfile', () => {
        it('deve lançar erro se o cliente não existe', async() => {
            mockClientRepository.findOneById.mockResolvedValue(null);

            await expect(service.seeProfile(999)).rejects.toThrow(NotFoundException);
        });

        it('deve retornar ClientProfileDTO com dados corretos', async() => {
            const mockClient = {id: 1, name: 'client', gmail: 'client@gmail.com', phone: '11999999999', fidelity: 9};

            mockClientRepository.findOneById.mockResolvedValue(mockClient);
            const result = await service.seeProfile(1);

            expect(result).toBeInstanceOf(ClientProfileDTO);
            expect(result).toEqual({name: 'client', gmail: 'client@gmail.com', phone: '11999999999', fidelity: 9});
        });
    });

    describe('updateClientProfile', () => {
        it('deve atualizar apenas o nome', async() => {
            const existingClient = {id: 1, name: 'antigo', gmail: 'email@gmail.com', phone: '11999999999'};
            const updatedCliente = {...existingClient, name: 'novo'};
            mockClientRepository.findOneById.mockResolvedValue(existingClient);
            mockClientRepository.findOneById.mockResolvedValue(updatedCliente);            
            mockClientRepository.updateFields.mockResolvedValue(undefined);

            const result = await service.updateClientProfile(1, {name: 'novo'});

            expect(result.name).toBe('novo');
            expect(mockClientRepository.updateFields).toHaveBeenCalledWith(1, {name: 'novo'});
        });

        it('deve lançar erro ao tentar atualizar para um email existente', async() => {
            mockClientRepository.findOneById.mockResolvedValue({id: 1, gmail: 'atual@gmail.com'});
            mockClientRepository.findOneByEmail.mockResolvedValue({id: 2, gmail: 'existente@gmail.com'});

            await expect(
                service.updateClientProfile(1, {gmail: 'existente@gmail.com'})
            ).rejects.toThrow(BadRequestException);

            expect(mockClientRepository.findOneByEmail).toHaveBeenCalledWith('existente@gmail.com');
        });

    });
});

