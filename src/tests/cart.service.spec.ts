import { Test, TestingModule } from '@nestjs/testing';
import { CartService } from  '../services/cart.service';
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
    it('deve retornar carrinho com itens', async () => {
      const mockCart = { id_cart: 1, client_id: 1 };
      const mockItems = [{ id_cart_item: 1, item_id: 123 }];
      
      cartRepository.findCartByClientId.mockResolvedValue(mockCart);
      cartRepository.findCartItems.mockResolvedValue(mockItems);

      const result = await service.getCartByClientId(1);
      
      expect(result).toEqual({
        cart: mockCart,
        items: mockItems
      });
      expect(cartRepository.findCartByClientId).toBeCalledWith(1);
      expect(cartRepository.findCartItems).toBeCalledWith(1);
    });

    it('deve lançar erro se carrinho não existir', async () => {
      cartRepository.findCartByClientId.mockResolvedValue(null);
      
      await expect(service.getCartByClientId(999))
        .rejects
        .toThrow('Carrinho não encontrado para este cliente.');
    });
  });

  describe('addItem', () => {
    it('deve adicionar item ao carrinho', async () => {
      const mockCart = { id_cart: 1 };
      const mockItem = { 
        id_cart_item: 1,
        cart_id: 1,
        item_id: 2,
        quantity: 3
      };
      
      cartRepository.findCartByClientId.mockResolvedValue(mockCart);
      cartRepository.insertCartItem.mockResolvedValue(mockItem);

      const result = await service.addItem(1, 2, 3);
      
      expect(result).toEqual(mockItem);
      expect(cartRepository.insertCartItem)
        .toBeCalledWith(1, 2, 3);
    });
  });

  describe('updateItemQuantity', () => {
    it('deve atualizar quantidade do item', async () => {
      const mockItem = { 
        id_cart_item: 1,
        quantity: 5
      };
      
      cartRepository.updateCartItemQuantity.mockResolvedValue(mockItem);

      const result = await service.updateItemQuantity(1, 1, 5);
      
      expect(result).toEqual(mockItem);
      expect(cartRepository.updateCartItemQuantity)
        .toBeCalledWith(1, 5);
    });
  });

  describe('removeItem', () => {
    it('deve remover item do carrinho', async () => {
      cartRepository.deleteCartItem.mockResolvedValue(true);

      const result = await service.removeItem(1, 1);
      
      expect(result).toBe(true);
      expect(cartRepository.deleteCartItem)
        .toBeCalledWith(1);
    });
  });

  describe('getCartTotalByClientId', () => {
    it('deve calcular total do carrinho', async () => {
      const mockCart = { id_cart: 1 };
      const mockTotal = 150.50;
      
      cartRepository.findCartByClientId.mockResolvedValue(mockCart);
      cartRepository.getCartTotal.mockResolvedValue(mockTotal);

      const result = await service.getCartTotalByClientId(1);
      
      expect(result).toBe(mockTotal);
      expect(cartRepository.getCartTotal)
        .toBeCalledWith(1);
    });
  });

  describe('complementos', () => {
    const mockComplement = { 
      id_cic: 1,
      id_cart_item: 1,
      id_ic: 2,
      quantity: 3
    };

    it('deve adicionar complemento com quantidade válida', async () => {
      cartRepository.insertComplement.mockResolvedValue(mockComplement);

      const result = await service.addComplementToItem(1, 2, 3);
      
      expect(result).toEqual(mockComplement);
      expect(cartRepository.insertComplement)
        .toBeCalledWith(1, 2, 3);
    });

    it('deve atualizar complemento', async () => {
      cartRepository.updateComplementQuantity.mockResolvedValue(mockComplement);

      const result = await service.updateComplementQuantity(1, 2, 5);
      
      expect(result).toEqual(mockComplement);
      expect(cartRepository.updateComplementQuantity)
        .toBeCalledWith(1, 2, 5);
    });

    it('deve listar complementos do item', async () => {
      const mockComplements = [mockComplement];
      
      cartRepository.findComplementsOfCartItem.mockResolvedValue(mockComplements);

      const result = await service.getComplementsOfCartItem(1);
      
      expect(result).toEqual(mockComplements);
      expect(cartRepository.findComplementsOfCartItem)
        .toBeCalledWith(1);
    });
  });

  describe('validações', () => {
    it('deve bloquear quantidade inválida em complementos', async () => {
      await expect(service.addComplementToItem(1, 2, 0))
        .rejects
        .toThrow('A quantidade do complemento deve ser maior que zero.');

      await expect(service.updateComplementQuantity(1, 2, -1))
        .rejects
        .toThrow('A quantidade do complemento deve ser maior que zero.');
    });
  });
});