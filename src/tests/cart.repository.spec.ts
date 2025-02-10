import { client } from '../../db/db';
import { CartRepository } from 'src/repositories/cart.repository';

jest.mock('../../db/db', () => ({
  client: {
    query: jest.fn(),
  },
}));

describe('CartRepository', () => {
  let repository: CartRepository;

  beforeEach(() => {
    repository = new CartRepository();
    jest.clearAllMocks();
  });

  describe('findCartByClientId', () => {
    it('deve retornar um carrinho pelo ID do cliente', async () => {
      const mockCart = { id_cart: 1, client_id: 2 };
      (client.query as jest.Mock).mockResolvedValueOnce({ rows: [mockCart] });

      const result = await repository.findCartByClientId(2);

      expect(client.query).toHaveBeenCalledWith(
        'SELECT * FROM cart WHERE client_id = $1',
        [2]
      );
      expect(result).toEqual(mockCart);
    });

    it('deve retornar null se o carrinho não existir', async () => {
      (client.query as jest.Mock).mockResolvedValueOnce({ rows: [] });

      const result = await repository.findCartByClientId(2);

      expect(result).toBeNull();
    });
  });

  describe('findCartItems', () => {
    it('deve retornar os itens do carrinho', async () => {
      const mockItems = [{ id_cart_item: 1, cart_id: 2, item_id: 5, quantity: 2 }];
      (client.query as jest.Mock).mockResolvedValueOnce({ rows: mockItems });

      const result = await repository.findCartItems(2);

      expect(client.query).toHaveBeenCalledWith(
        'SELECT * FROM cart_item WHERE cart_id = $1',
        [2]
      );
      expect(result).toEqual(mockItems);
    });

    it('deve retornar um array vazio se não houver itens', async () => {
      (client.query as jest.Mock).mockResolvedValueOnce({ rows: [] });

      const result = await repository.findCartItems(2);

      expect(result).toEqual([]);
    });
  });

  describe('deleteCartItem', () => {
    it('deve excluir um item do carrinho', async () => {
      (client.query as jest.Mock).mockResolvedValueOnce({ rowCount: 1 });

      const result = await repository.deleteCartItem(1);

      expect(client.query).toHaveBeenCalledWith(
        'DELETE FROM cart_item WHERE id_cart_item = $1',
        [1]
      );
      expect(result).toBe(true);
    });

    it('deve retornar false se o item não existir', async () => {
      (client.query as jest.Mock).mockResolvedValueOnce({ rowCount: 0 });

      const result = await repository.deleteCartItem(1);

      expect(result).toBe(false);
    });
  });

  describe('getCartTotal', () => {
    it('deve retornar o total do carrinho', async () => {
      (client.query as jest.Mock).mockResolvedValueOnce({ rows: [{ total: 50.00 }] });

      const result = await repository.getCartTotal(2);

      expect(client.query).toHaveBeenCalledWith(
        'SELECT get_cart_total($1) AS total',
        [2]
      );
      expect(result).toBe(50.00);
    });
  });

  describe('insertCartItem', () => {
    it('deve inserir um novo item no carrinho', async () => {
      const mockItem = { id_cart_item: 1, item_id: 5, quantity: 2 };
      (client.query as jest.Mock).mockResolvedValueOnce({ rows: [mockItem] });

      const result = await repository.insertCartItem(1, 5, 2);

      expect(result).toEqual(mockItem);
    });
  });

  describe('updateCartItemQuantity', () => {
    it('deve atualizar a quantidade do item', async () => {
      const mockItem = { id_cart_item: 1, quantity: 3 };
      (client.query as jest.Mock).mockResolvedValueOnce({ rows: [mockItem] });

      const result = await repository.updateCartItemQuantity(1, 3);

      expect(result).toEqual(mockItem);
    });
  });

  describe('insertComplement', () => {
    it('deve inserir um complemento corretamente', async () => {
      const mockComplement = { id_cart_item: 1, id_ic: 5, quantity: 2, full_price: 10.00 };
      (client.query as jest.Mock).mockResolvedValueOnce({ rows: [mockComplement] });

      const result = await repository.insertComplement(1, 5, 2);

      expect(result).toEqual(mockComplement);
    });
  });

  describe('updateComplementQuantity', () => {
    it('deve atualizar a quantidade do complemento', async () => {
      const mockComplement = { id_cart_item: 1, id_ic: 5, quantity: 3, full_price: 15.00 };
      (client.query as jest.Mock).mockResolvedValueOnce({ rows: [mockComplement] });

      const result = await repository.updateComplementQuantity(1, 5, 3);

      expect(result).toEqual(mockComplement);
    });
  });

  describe('findComplementsOfCartItem', () => {
    it('deve retornar complementos do item do carrinho', async () => {
      const mockComplements = [{ id_cart_item: 1, id_ic: 5, name: 'Bacon Extra', price: 5.00 }];
      (client.query as jest.Mock).mockResolvedValueOnce({ rows: mockComplements });

      const result = await repository.findComplementsOfCartItem(1);

      expect(result).toEqual(mockComplements);
    });

    it('deve retornar um array vazio se não houver complementos', async () => {
      (client.query as jest.Mock).mockResolvedValueOnce({ rows: [] });

      const result = await repository.findComplementsOfCartItem(1);

      expect(result).toEqual([]);
    });
  });

  describe('Error Handling', () => {
    it('deve lançar erro quando a consulta falhar', async () => {
      const error = new Error('Database error');
      (client.query as jest.Mock).mockRejectedValueOnce(error);

      await expect(repository.findCartByClientId(1)).rejects.toThrow('Database error');
    });

    it('deve lançar erro ao tentar deletar um item inexistente', async () => {
      const error = new Error('Delete failed');
      (client.query as jest.Mock).mockRejectedValueOnce(error);

      await expect(repository.deleteCartItem(99)).rejects.toThrow('Delete failed');
    });
  });
});
