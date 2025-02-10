import { Test, TestingModule } from '@nestjs/testing';
import { MenuRepository } from 'src/repositories/menu.repository';
import { client } from '../../db/db';

jest.mock('../../db/db', () => ({
  client: {
    query: jest.fn(),
    end: jest.fn(),
  },
}));

describe('MenuRepository', () => {
  let repository: MenuRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MenuRepository],
    }).compile();

    repository = module.get<MenuRepository>(MenuRepository);
  });

  afterAll(async () => {
    await client.end();
  });

  it('deve ser definido', () => {
    expect(repository).toBeDefined();
  });

  describe('getAll', () => {
    it('deve retornar todos os menus', async () => {
      const mockMenus = [{ id: 1, name: 'Test Menu' }];
      (client.query as jest.Mock).mockResolvedValue({ rows: mockMenus });

      const result = await repository.getAll();

      expect(client.query).toHaveBeenCalledWith('SELECT * FROM menu');
      expect(result).toEqual(mockMenus);
    });
  });

  describe('getById', () => {
    it('deve retornar um menu pelo id', async () => {
      const mockMenu = { id: 1, name: 'Test Menu' };
      (client.query as jest.Mock).mockResolvedValue({ rows: [mockMenu] });

      const result = await repository.getById(1);

      expect(client.query).toHaveBeenCalledWith('SELECT * FROM menu WHERE id_menu = $1', [1]);
      expect(result).toEqual(mockMenu);
    });

    it('deve retornar null se o menu não for encontrado', async () => {
      (client.query as jest.Mock).mockResolvedValue({ rows: [] });

      const result = await repository.getById(1);

      expect(client.query).toHaveBeenCalledWith('SELECT * FROM menu WHERE id_menu = $1', [1]);
      expect(result).toBeNull();
    });
  });

  describe('create', () => {
    it('deve criar um novo menu', async () => {
      const mockMenu = { id: 1, name: 'Test Menu' };
      (client.query as jest.Mock).mockResolvedValue({ rows: [mockMenu] });

      const result = await repository.create('Test Menu');

      expect(client.query).toHaveBeenCalledWith('INSERT INTO menu (name) VALUES ($1) RETURNING *', ['Test Menu']);
      expect(result).toEqual(mockMenu);
    });
  });

  describe('delete', () => {
    it('deve deletar um menu pelo id', async () => {
      (client.query as jest.Mock).mockResolvedValue({ rowCount: 1 });

      const result = await repository.delete(1);

      expect(client.query).toHaveBeenCalledWith('DELETE FROM menu WHERE id_menu = $1', [1]);
      expect(result).toBe(true);
    });

    it('deve retornar false se o menu não for encontrado', async () => {
      (client.query as jest.Mock).mockResolvedValue({ rowCount: 0 });

      const result = await repository.delete(1);

      expect(client.query).toHaveBeenCalledWith('DELETE FROM menu WHERE id_menu = $1', [1]);
      expect(result).toBe(false);
    });
  });

  describe('getGroupsByMenuId', () => {
    it('deve retornar todos os grupos de um menu pelo id', async () => {
      const mockGroups = [{ id: 1, name: 'Test Group' }];
      (client.query as jest.Mock).mockResolvedValue({ rows: mockGroups });

      const result = await repository.getGroupsByMenuId(1);

      expect(client.query).toHaveBeenCalledWith('SELECT * FROM "group" WHERE id_menu = $1', [1]);
      expect(result).toEqual(mockGroups);
    });
  });

  describe('deleteGroup', () => {
    it('deve deletar um grupo pelo id', async () => {
      (client.query as jest.Mock).mockResolvedValue({ rowCount: 1 });

      const result = await repository.deleteGroup(1);

      expect(client.query).toHaveBeenCalledWith('DELETE FROM "group" WHERE id_g = $1 RETURNING *', [1]);
      expect(result).toBe(true);
    });

    it('deve retornar false se o grupo não for encontrado', async () => {
      (client.query as jest.Mock).mockResolvedValue({ rowCount: 0 });

      const result = await repository.deleteGroup(1);

      expect(client.query).toHaveBeenCalledWith('DELETE FROM "group" WHERE id_g = $1 RETURNING *', [1]);
      expect(result).toBe(false);
    });
  });

  describe('createGroup', () => {
    it('deve criar um novo grupo', async () => {
      const mockGroup = { id: 1, name: 'Test Group' };
      (client.query as jest.Mock).mockResolvedValue({ rows: [mockGroup] });

      const result = await repository.createGroup('Test Group', 1);

      expect(client.query).toHaveBeenCalledWith('INSERT INTO "group" (name, id_menu) VALUES ($1, $2) RETURNING *', ['Test Group', 1]);
      expect(result).toEqual(mockGroup);
    });
  });

  describe('createItem', () => {
    it('deve criar um novo item', async () => {
      const mockItem = { id: 1, name: 'Test Item' };
      const createItemDto = { name: 'Test Item', description: 'Test Description', price: 10, new_price: 8, photo: 'test.jpg' };
      (client.query as jest.Mock).mockResolvedValue({ rows: [mockItem] });

      const result = await repository.createItem(1, createItemDto);

      expect(client.query).toHaveBeenCalledWith(
        'INSERT INTO item (id_g, name, description, price, new_price, photo) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [1, 'Test Item', 'Test Description', 10, 8, 'test.jpg'],
      );
      expect(result).toEqual(mockItem);
    });
  });

  describe('getItemsByGroupId', () => {
    it('deve retornar todos os itens de um grupo pelo id', async () => {
      const mockItems = [{ id: 1, name: 'Test Item' }];
      (client.query as jest.Mock).mockResolvedValue({ rows: mockItems });

      const result = await repository.getItemsByGroupId(1);

      expect(client.query).toHaveBeenCalledWith('SELECT * FROM item WHERE id_g = $1', [1]);
      expect(result).toEqual(mockItems);
    });
  });

  describe('deleteItem', () => {
    it('deve deletar um item pelo id', async () => {
      (client.query as jest.Mock).mockResolvedValue({ rowCount: 1 });

      const result = await repository.deleteItem(1);

      expect(client.query).toHaveBeenCalledWith('DELETE FROM item WHERE id_i = $1 RETURNING *', [1]);
      expect(result).toBe(true);
    });

    it('deve retornar false se o item não for encontrado', async () => {
      (client.query as jest.Mock).mockResolvedValue({ rowCount: 0 });

      const result = await repository.deleteItem(1);

      expect(client.query).toHaveBeenCalledWith('DELETE FROM item WHERE id_i = $1 RETURNING *', [1]);
      expect(result).toBe(false);
    });
  });

  describe('getComplementsByItemId', () => {
    it('deve retornar todos os complementos de um item pelo id', async () => {
      const mockComplements = [{ id: 1, name: 'Test Complement' }];
      (client.query as jest.Mock).mockResolvedValue({ rows: mockComplements });

      const result = await repository.getComplementsByItemId(1);

      expect(client.query).toHaveBeenCalledWith('SELECT * FROM complement WHERE id_i = $1', [1]);
      expect(result).toEqual(mockComplements);
    });
  });

  describe('createComplement', () => {
    it('deve criar um novo complemento', async () => {
      const mockComplement = { id: 1, name: 'Test Complement' };
      (client.query as jest.Mock).mockResolvedValue({ rows: [mockComplement] });

      const result = await repository.createComplement(1);

      expect(client.query).toHaveBeenCalledWith('INSERT INTO complement (id_i) VALUES ($1) RETURNING *', [1]);
      expect(result).toEqual(mockComplement);
    });
  });

  describe('deleteComplement', () => {
    it('deve deletar um complemento pelo id', async () => {
      (client.query as jest.Mock).mockResolvedValue({ rowCount: 1 });

      const result = await repository.deleteComplement(1);

      expect(client.query).toHaveBeenCalledWith('DELETE FROM complement WHERE id_comp = $1 RETURNING *', [1]);
      expect(result).toBe(true);
    });

    it('deve retornar false se o complemento não for encontrado', async () => {
      (client.query as jest.Mock).mockResolvedValue({ rowCount: 0 });

      const result = await repository.deleteComplement(1);

      expect(client.query).toHaveBeenCalledWith('DELETE FROM complement WHERE id_comp = $1 RETURNING *', [1]);
      expect(result).toBe(false);
    });
  });

  describe('getGroupsByComplementId', () => {
    it('deve retornar todos os grupos de um complemento pelo id', async () => {
      const mockGroups = [{ id: 1, name: 'Test Group' }];
      (client.query as jest.Mock).mockResolvedValue({ rows: mockGroups });

      const result = await repository.getGroupsByComplementId(1);

      expect(client.query).toHaveBeenCalledWith('SELECT * FROM group_c WHERE id_comp = $1', [1]);
      expect(result).toEqual(mockGroups);
    });
  });

  describe('createGroupComplement', () => {
    it('deve criar um novo grupo de complemento', async () => {
      const mockGroupComplement = { id: 1, name: 'Test Group Complement' };
      (client.query as jest.Mock).mockResolvedValue({ rows: [mockGroupComplement] });

      const result = await repository.createGroupComplement(1, 'Test Group Complement', true, 1, 5);

      expect(client.query).toHaveBeenCalledWith(
        'INSERT INTO group_c (id_comp, name, mandatory, min, max) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [1, 'Test Group Complement', true, 1, 5],
      );
      expect(result).toEqual(mockGroupComplement);
    });
  });

  describe('deleteGroupComplement', () => {
    it('deve deletar um grupo de complemento pelo id', async () => {
      (client.query as jest.Mock).mockResolvedValue({ rowCount: 1 });

      const result = await repository.deleteGroupComplement(1);

      expect(client.query).toHaveBeenCalledWith('DELETE FROM group_c WHERE id_gc = $1 RETURNING *', [1]);
      expect(result).toBe(true);
    });

    it('deve retornar false se o grupo de complemento não for encontrado', async () => {
      (client.query as jest.Mock).mockResolvedValue({ rowCount: 0 });

      const result = await repository.deleteGroupComplement(1);

      expect(client.query).toHaveBeenCalledWith('DELETE FROM group_c WHERE id_gc = $1 RETURNING *', [1]);
      expect(result).toBe(false);
    });
  });

  describe('getItemsByGroupComplementId', () => {
    it('deve retornar todos os itens de um grupo de complemento pelo id', async () => {
      const mockItems = [{ id: 1, name: 'Test Item' }];
      (client.query as jest.Mock).mockResolvedValue({ rows: mockItems });

      const result = await repository.getItemsByGroupComplementId(1);

      expect(client.query).toHaveBeenCalledWith('SELECT * FROM item_c WHERE id_gc = $1', [1]);
      expect(result).toEqual(mockItems);
    });
  });

  describe('createItemComplement', () => {
    it('deve criar um novo item de complemento', async () => {
      const mockItemComplement = { id: 1, name: 'Test Item Complement' };
      (client.query as jest.Mock).mockResolvedValue({ rows: [mockItemComplement] });

      const result = await repository.createItemComplement(1, 'Test Item Complement', 10, 'Test Description', true, 'test.jpg');

      expect(client.query).toHaveBeenCalledWith(
        'INSERT INTO item_c (id_gc, name, price, description, status, photo) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [1, 'Test Item Complement', 10, 'Test Description', true, 'test.jpg'],
      );
      expect(result).toEqual(mockItemComplement);
    });
  });

  describe('deleteItemComplement', () => {
    it('deve deletar um item de complemento pelo id', async () => {
      (client.query as jest.Mock).mockResolvedValue({ rowCount: 1 });

      const result = await repository.deleteItemComplement(1);

      expect(client.query).toHaveBeenCalledWith('DELETE FROM item_c WHERE id_ic = $1 RETURNING *', [1]);
      expect(result).toBe(true);
    });

    it('deve retornar false se o item de complemento não for encontrado', async () => {
      (client.query as jest.Mock).mockResolvedValue({ rowCount: 0 });

      const result = await repository.deleteItemComplement(1);

      expect(client.query).toHaveBeenCalledWith('DELETE FROM item_c WHERE id_ic = $1 RETURNING *', [1]);
      expect(result).toBe(false);
    });
  });

  describe('getMenuStructure', () => {
    it('deve retornar a estrutura do menu pelo id', async () => {
      const mockMenuStructure = { id: 1, name: 'Test Menu Structure' };
      (client.query as jest.Mock).mockResolvedValue({ rows: [{ menu_structure: mockMenuStructure }] });

      const result = await repository.getMenuStructure(1);

      expect(client.query).toHaveBeenCalledWith('SELECT get_menu_structure($1) AS menu_structure', [1]);
      expect(result).toEqual(mockMenuStructure);
    });
  });
});