import { Test, TestingModule } from '@nestjs/testing';
import { MenuService } from '../services/menu.service';
import { MenuRepository } from '../repositories/menu.repository';
import { client } from '../../db/db';
describe('MenuService', () => {
  let service: MenuService;
  let menuRepository: jest.Mocked<MenuRepository>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MenuService,
        {
          provide: MenuRepository,
          useValue: {
            getAll: jest.fn(),
            getById: jest.fn(),
            create: jest.fn(),
            delete: jest.fn(),
            getGroupsByMenuId: jest.fn(),
            deleteGroup: jest.fn(),
            createGroup: jest.fn(),
            createItem: jest.fn(),
            getItemsByGroupId: jest.fn(),
            deleteItem: jest.fn(),
            getComplementsByItemId: jest.fn(),
            createComplement: jest.fn(),
            deleteComplement: jest.fn(),
            getGroupsByComplementId: jest.fn(),
            createGroupComplement: jest.fn(),
            deleteGroupComplement: jest.fn(),
            getItemsByGroupComplementId: jest.fn(),
            createItemComplement: jest.fn(),
            deleteItemComplement: jest.fn(),
            getMenuStructure: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<MenuService>(MenuService);
    menuRepository = module.get(MenuRepository) as jest.Mocked<MenuRepository>;
  });
  afterAll(async () => {
    await client.end();
  });

  describe('findAll', () => {
    it('deve retornar todos os menus', async () => {
      const menus = [{ id: 1, name: 'Menu 1' }, { id: 2, name: 'Menu 2' }];
      menuRepository.getAll.mockResolvedValue(menus);

      const result = await service.findAll();
      expect(result).toEqual(menus);
      expect(menuRepository.getAll).toHaveBeenCalled();
    });
  });

  describe('findById', () => {
    it('deve retornar um menu pelo id', async () => {
      const menu = { id: 1, name: 'Menu 1' };
      menuRepository.getById.mockResolvedValue(menu);

      const result = await service.findById(1);
      expect(result).toEqual(menu);
      expect(menuRepository.getById).toHaveBeenCalledWith(1);
    });
  });

  describe('createMenu', () => {
    it('deve criar um menu', async () => {
      const createdMenu = { id: 1, name: 'Novo Menu' };
      menuRepository.create.mockResolvedValue(createdMenu);

      const result = await service.createMenu('Novo Menu');
      expect(result).toEqual(createdMenu);
      expect(menuRepository.create).toHaveBeenCalledWith('Novo Menu');
    });
  });

  describe('deleteMenu', () => {
    it('deve excluir um menu se ele existir', async () => {
      // Simula que a exclusão foi bem-sucedida retornando um valor truthy
      menuRepository.delete.mockResolvedValue(true);

      await service.deleteMenu(1);
      expect(menuRepository.delete).toHaveBeenCalledWith(1);
    });

    it('deve lançar erro se o menu não for encontrado', async () => {
      menuRepository.delete.mockResolvedValue(false);

      await expect(service.deleteMenu(999))
        .rejects
        .toThrow('Menu with ID 999 not found');

      expect(menuRepository.delete).toHaveBeenCalledWith(999);
    });
  });

  describe('getGroupsByMenuId', () => {
    it('deve retornar os grupos de um menu', async () => {
      const groups = [{ id: 1, name: 'Grupo 1' }];
      menuRepository.getGroupsByMenuId.mockResolvedValue(groups);

      const result = await service.getGroupsByMenuId(1);
      expect(result).toEqual(groups);
      expect(menuRepository.getGroupsByMenuId).toHaveBeenCalledWith(1);
    });
  });

  describe('deleteGroup', () => {
    it('deve excluir um grupo', async () => {
      menuRepository.deleteGroup.mockResolvedValue(true);

      const result = await service.deleteGroup(1);
      expect(result).toBe(true);
      expect(menuRepository.deleteGroup).toHaveBeenCalledWith(1);
    });
  });

  describe('createGroup', () => {
    it('deve criar um grupo para um menu', async () => {
      const group = { id: 1, name: 'Grupo 1', id_menu: 1 };
      menuRepository.createGroup.mockResolvedValue(group);

      const result = await service.createGroup('Grupo 1', 1);
      expect(result).toEqual(group);
      expect(menuRepository.createGroup).toHaveBeenCalledWith('Grupo 1', 1);
    });
  });

  describe('createItem', () => {
    it('deve criar um item dentro de um grupo', async () => {
      const createItemDto = { name: 'Item 1', price: 10 };
      const createdItem = { id: 1, ...createItemDto };
      menuRepository.createItem.mockResolvedValue(createdItem);

      const result = await service.createItem(1, createItemDto);
      expect(result).toEqual(createdItem);
      expect(menuRepository.createItem).toHaveBeenCalledWith(1, createItemDto);
    });
  });

  describe('getItemsByGroupId', () => {
    it('deve retornar os itens de um grupo', async () => {
      const items = [{ id: 1, name: 'Item 1' }];
      menuRepository.getItemsByGroupId.mockResolvedValue(items);

      const result = await service.getItemsByGroupId(1);
      expect(result).toEqual(items);
      expect(menuRepository.getItemsByGroupId).toHaveBeenCalledWith(1);
    });
  });

  describe('deleteItem', () => {
    it('deve excluir um item', async () => {
      menuRepository.deleteItem.mockResolvedValue(true);

      const result = await service.deleteItem(1);
      expect(result).toBe(true);
      expect(menuRepository.deleteItem).toHaveBeenCalledWith(1);
    });
  });

  describe('getComplementsByItemId', () => {
    it('deve retornar os complementos de um item', async () => {
      const complements = [{ id: 1, name: 'Complemento 1' }];
      menuRepository.getComplementsByItemId.mockResolvedValue(complements);

      const result = await service.getComplementsByItemId(1);
      expect(result).toEqual(complements);
      expect(menuRepository.getComplementsByItemId).toHaveBeenCalledWith(1);
    });
  });

  describe('createComplement', () => {
    it('deve criar um complemento para um item', async () => {
      const complement = { id: 1, id_item: 1 };
      menuRepository.createComplement.mockResolvedValue(complement);

      const result = await service.createComplement(1);
      expect(result).toEqual(complement);
      expect(menuRepository.createComplement).toHaveBeenCalledWith(1);
    });
  });

  describe('deleteComplement', () => {
    it('deve excluir um complemento', async () => {
      menuRepository.deleteComplement.mockResolvedValue(true);

      const result = await service.deleteComplement(1);
      expect(result).toBe(true);
      expect(menuRepository.deleteComplement).toHaveBeenCalledWith(1);
    });
  });

  describe('getGroupsByComplementId', () => {
    it('deve retornar os grupos de um complemento', async () => {
      const groups = [{ id: 1, name: 'Grupo Complemento 1' }];
      menuRepository.getGroupsByComplementId.mockResolvedValue(groups);

      const result = await service.getGroupsByComplementId(1);
      expect(result).toEqual(groups);
      expect(menuRepository.getGroupsByComplementId).toHaveBeenCalledWith(1);
    });
  });

  describe('createGroupComplement', () => {
    it('deve criar um grupo de complemento', async () => {
      const groupComplement = { id: 1, name: 'Grupo Comp', mandatory: true, min: 1, max: 2 };
      menuRepository.createGroupComplement.mockResolvedValue(groupComplement);

      const result = await service.createGroupComplement(1, 'Grupo Comp', true, 1, 2);
      expect(result).toEqual(groupComplement);
      expect(menuRepository.createGroupComplement).toHaveBeenCalledWith(1, 'Grupo Comp', true, 1, 2);
    });
  });

  describe('deleteGroupComplement', () => {
    it('deve excluir um grupo de complemento', async () => {
      menuRepository.deleteGroupComplement.mockResolvedValue(true);

      const result = await service.deleteGroupComplement(1);
      expect(result).toBe(true);
      expect(menuRepository.deleteGroupComplement).toHaveBeenCalledWith(1);
    });
  });

  describe('getItemsByGroupComplementId', () => {
    it('deve retornar os itens de um grupo de complemento', async () => {
      const items = [{ id: 1, name: 'Item Complemento' }];
      menuRepository.getItemsByGroupComplementId.mockResolvedValue(items);

      const result = await service.getItemsByGroupComplementId(1);
      expect(result).toEqual(items);
      expect(menuRepository.getItemsByGroupComplementId).toHaveBeenCalledWith(1);
    });
  });

  describe('createItemComplement', () => {
    it('deve criar um item de complemento', async () => {
      const itemComplement = { 
        id: 1, 
        name: 'Item Complemento', 
        price: 9.99, 
        description: 'Descrição', 
        status: true, 
        photo: 'foto.png' 
      };
      menuRepository.createItemComplement.mockResolvedValue(itemComplement);

      const result = await service.createItemComplement(1, 'Item Complemento', 9.99, 'Descrição', true, 'foto.png');
      expect(result).toEqual(itemComplement);
      expect(menuRepository.createItemComplement).toHaveBeenCalledWith(1, 'Item Complemento', 9.99, 'Descrição', true, 'foto.png');
    });
  });

  describe('deleteItemComplement', () => {
    it('deve excluir um item de complemento', async () => {
      menuRepository.deleteItemComplement.mockResolvedValue(true);

      const result = await service.deleteItemComplement(1);
      expect(result).toBe(true);
      expect(menuRepository.deleteItemComplement).toHaveBeenCalledWith(1);
    });
  });

  describe('getMenuStructure', () => {
    it('deve retornar a estrutura do menu', async () => {
      const structure = { id: 1, groups: [] };
      menuRepository.getMenuStructure.mockResolvedValue(structure);

      const result = await service.getMenuStructure(1);
      expect(result).toEqual(structure);
      expect(menuRepository.getMenuStructure).toHaveBeenCalledWith(1);
    });
  });
});
