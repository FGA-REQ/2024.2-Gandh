import { Test, TestingModule } from '@nestjs/testing';
import { CartService } from '../services/cart.service';
import { CartRepository } from '../repositories/cart.repository';
import { client } from '../../db/db';

describe('CartService', () => {
  let service: CartService;
  let cartRepository: jest.Mocked<CartRepository>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CartService,
        {
          provide: CartRepository,
          useValue: {
            findCartByClientId: jest.fn(),
            findCartItems: jest.fn(),
            insertCartItem: jest.fn(),
            updateCartItemQuantity: jest.fn(),
            deleteCartItem: jest.fn(),
            getCartTotal: jest.fn(),
            insertComplement: jest.fn(),
            updateComplementQuantity: jest.fn(),
            findComplementsOfCartItem: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<CartService>(CartService);
    cartRepository = module.get(CartRepository) as jest.Mocked<CartRepository>;
  });

  afterAll(async () => {
    await client.end();
  });

  describe('getCartByClientId', () => {
    it('deve retornar carrinho com itens quando o carrinho existir', async () => {
      const mockCart = { id_cart: 1, client_id: 1 };
      const mockItems = [{ id_cart_item: 1, item_id: 123 }];

      cartRepository.findCartByClientId.mockResolvedValue(mockCart);
      cartRepository.findCartItems.mockResolvedValue(mockItems);

      const result = await service.getCartByClientId(1);

      expect(result).toEqual({ cart: mockCart, items: mockItems });
      expect(cartRepository.findCartByClientId).toHaveBeenCalledWith(1);
      expect(cartRepository.findCartItems).toHaveBeenCalledWith(mockCart.id_cart);
    });

    it('deve lançar erro se o carrinho não existir', async () => {
      cartRepository.findCartByClientId.mockResolvedValue(null);

      await expect(service.getCartByClientId(999))
        .rejects
        .toThrow('Carrinho não encontrado para este cliente.');
    });
  });

  describe('addItem', () => {
    it('deve adicionar item ao carrinho se o carrinho existir', async () => {
      const mockCart = { id_cart: 1 };
      const mockItem = { id_cart_item: 1, cart_id: 1, item_id: 2, quantity: 3 };

      cartRepository.findCartByClientId.mockResolvedValue(mockCart);
      cartRepository.insertCartItem.mockResolvedValue(mockItem);

      const result = await service.addItem(1, 2, 3);

      expect(result).toEqual(mockItem);
      expect(cartRepository.insertCartItem).toHaveBeenCalledWith(mockCart.id_cart, 2, 3);
    });

    it('deve lançar erro ao adicionar item se o carrinho não existir', async () => {
      cartRepository.findCartByClientId.mockResolvedValue(null);

      await expect(service.addItem(1, 2, 3))
        .rejects
        .toThrow('Carrinho não encontrado para este cliente.');
    });
  });

  describe('updateItemQuantity', () => {
    it('deve atualizar a quantidade do item', async () => {
      const mockItem = { id_cart_item: 1, quantity: 5 };

      cartRepository.updateCartItemQuantity.mockResolvedValue(mockItem);

      const result = await service.updateItemQuantity(1, 1, 5);

      expect(result).toEqual(mockItem);
      expect(cartRepository.updateCartItemQuantity).toHaveBeenCalledWith(1, 5);
    });
  });

  describe('removeItem', () => {
    it('deve remover o item do carrinho e retornar true', async () => {
      cartRepository.deleteCartItem.mockResolvedValue(true);

      const result = await service.removeItem(1, 1);

      expect(result).toBe(true);
      expect(cartRepository.deleteCartItem).toHaveBeenCalledWith(1);
    });

    it('deve retornar false se a remoção falhar', async () => {
      cartRepository.deleteCartItem.mockResolvedValue(false);

      const result = await service.removeItem(1, 1);

      expect(result).toBe(false);
      expect(cartRepository.deleteCartItem).toHaveBeenCalledWith(1);
    });
  });

  describe('getCartTotalByClientId', () => {
    it('deve retornar o total do carrinho se o carrinho existir', async () => {
      const mockCart = { id_cart: 1 };
      const mockTotal = 150.50;

      cartRepository.findCartByClientId.mockResolvedValue(mockCart);
      cartRepository.getCartTotal.mockResolvedValue(mockTotal);

      const result = await service.getCartTotalByClientId(1);

      expect(result).toBe(mockTotal);
      expect(cartRepository.getCartTotal).toHaveBeenCalledWith(mockCart.id_cart);
    });

    it('deve lançar erro se o carrinho não existir ao calcular o total', async () => {
      cartRepository.findCartByClientId.mockResolvedValue(null);

      await expect(service.getCartTotalByClientId(1))
        .rejects
        .toThrow('Carrinho não encontrado para este cliente.');
    });
  });

  describe('addComplementToItem', () => {
    it('deve adicionar complemento com quantidade válida', async () => {
      const mockComplement = { id_cic: 1, id_cart_item: 1, id_ic: 2, quantity: 3 };
      cartRepository.insertComplement.mockResolvedValue(mockComplement);

      const result = await service.addComplementToItem(1, 2, 3);

      expect(result).toEqual(mockComplement);
      expect(cartRepository.insertComplement).toHaveBeenCalledWith(1, 2, 3);
    });

    it('deve lançar erro se a quantidade do complemento for inválida (<= 0)', async () => {
      await expect(service.addComplementToItem(1, 2, 0))
        .rejects
        .toThrow('A quantidade do complemento deve ser maior que zero.');

      await expect(service.addComplementToItem(1, 2, -1))
        .rejects
        .toThrow('A quantidade do complemento deve ser maior que zero.');
    });
  });

  describe('updateComplementQuantity', () => {
    it('deve atualizar o complemento com quantidade válida', async () => {
      const mockComplement = { id_cic: 1, id_cart_item: 1, id_ic: 2, quantity: 5 };
      cartRepository.updateComplementQuantity.mockResolvedValue(mockComplement);

      const result = await service.updateComplementQuantity(1, 2, 5);

      expect(result).toEqual(mockComplement);
      expect(cartRepository.updateComplementQuantity).toHaveBeenCalledWith(1, 2, 5);
    });

    it('deve lançar erro ao atualizar o complemento com quantidade inválida (<= 0)', async () => {
      await expect(service.updateComplementQuantity(1, 2, 0))
        .rejects
        .toThrow('A quantidade do complemento deve ser maior que zero.');

      await expect(service.updateComplementQuantity(1, 2, -5))
        .rejects
        .toThrow('A quantidade do complemento deve ser maior que zero.');
    });
  });

  describe('getComplementsOfCartItem', () => {
    it('deve retornar os complementos de um item do carrinho', async () => {
      const mockComplements = [{ id_cic: 1, id_cart_item: 1, id_ic: 2, quantity: 3 }];
      cartRepository.findComplementsOfCartItem.mockResolvedValue(mockComplements);

      const result = await service.getComplementsOfCartItem(1);

      expect(result).toEqual(mockComplements);
      expect(cartRepository.findComplementsOfCartItem).toHaveBeenCalledWith(1);
    });
  });
});
