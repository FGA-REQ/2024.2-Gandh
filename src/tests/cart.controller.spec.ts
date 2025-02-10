import { Test, TestingModule } from '@nestjs/testing';
import { client } from '../../db/db';
import { CartController } from 'src/controllers/cart.controller';
import { CartService } from 'src/services/cart.service';

describe('CartController', () => {
  let cartController: CartController;
  let cartService: CartService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CartController],
      providers: [
        {
          provide: CartService,
          useValue: {
            getCartByClientId: jest.fn(),
            addItem: jest.fn(),
            updateItemQuantity: jest.fn(),
            removeItem: jest.fn(),
            getCartTotalByClientId: jest.fn(),
            addComplementToItem: jest.fn(),
            updateComplementQuantity: jest.fn(),
            getComplementsOfCartItem: jest.fn(),
          },
        },
      ],
    }).compile();

    cartController = module.get<CartController>(CartController);
    cartService = module.get<CartService>(CartService);
  });

  afterAll(async () => {
    await client.end();
});


  it('should be defined', () => {
    expect(cartController).toBeDefined();
  });

  describe('getCart', () => {
    it('should return the cart for a given client', async () => {
      const clientId = 1;
      const cart = { items: [] };
      jest.spyOn(cartService, 'getCartByClientId').mockResolvedValue(cart);

      expect(await cartController.getCart(clientId)).toBe(cart);
    });
  });

  describe('addItemToCart', () => {
    it('should add an item to the cart', async () => {
      const clientId = 1;
      const body = { itemId: 1, quantity: 2 };
      const addedItem = { id: 1, itemId: 1, quantity: 2 };
      jest.spyOn(cartService, 'addItem').mockResolvedValue(addedItem);

      expect(await cartController.addItemToCart(clientId, body)).toEqual({
        message: 'Item adicionado ao carrinho com sucesso.',
        item: addedItem,
      });
    });
  });

  describe('updateCartItem', () => {
    it('should update the quantity of an item in the cart', async () => {
      const clientId = 1;
      const cartItemId = 1;
      const body = { quantity: 3 };
      const updatedItem = { id: 1, itemId: 1, quantity: 3 };
      jest.spyOn(cartService, 'updateItemQuantity').mockResolvedValue(updatedItem);

      expect(await cartController.updateCartItem(clientId, cartItemId, body)).toEqual({
        message: 'Quantidade atualizada com sucesso.',
        item: updatedItem,
      });
    });
  });

  describe('removeItemFromCart', () => {
    it('should remove an item from the cart', async () => {
      const clientId = 1;
      const cartItemId = 1;
      jest.spyOn(cartService, 'removeItem').mockResolvedValue(true);

      expect(await cartController.removeItemFromCart(clientId, cartItemId)).toEqual({
        message: 'Item removido com sucesso.',
      });
    });

    it('should return a message if the item is not found', async () => {
      const clientId = 1;
      const cartItemId = 1;
      jest.spyOn(cartService, 'removeItem').mockResolvedValue(false);

      expect(await cartController.removeItemFromCart(clientId, cartItemId)).toEqual({
        message: 'Item não encontrado no carrinho.',
      });
    });
  });

  describe('getCartTotal', () => {
    it('should return the total of the cart for a given client', async () => {
      const clientId = 1;
      const total = 100;
      jest.spyOn(cartService, 'getCartTotalByClientId').mockResolvedValue(total);

      expect(await cartController.getCartTotal(clientId)).toEqual({ total });
    });
  });

  describe('addComplementToCartItem', () => {
    it('should add a complement to a cart item', async () => {
      const clientId = 1;
      const cartItemId = 1;
      const body = { complementId: 1, quantity: 2 };
      const addedComplement = { id: 1, complementId: 1, quantity: 2 };
      jest.spyOn(cartService, 'addComplementToItem').mockResolvedValue(addedComplement);

      expect(await cartController.addComplementToCartItem(clientId, cartItemId, body)).toEqual({
        message: 'Complemento adicionado com sucesso.',
        complement: addedComplement,
      });
    });
  });

  describe('updateComplementQuantity', () => {
    it('should update the quantity of a complement in a cart item', async () => {
      const clientId = 1;
      const cartItemId = 1;
      const complementId = 1;
      const body = { quantity: 3 };
      const updatedComplement = { id: 1, complementId: 1, quantity: 3 };
      jest.spyOn(cartService, 'updateComplementQuantity').mockResolvedValue(updatedComplement);

      expect(await cartController.updateComplementQuantity(clientId, cartItemId, complementId, body)).toEqual({
        message: 'Quantidade do complemento atualizada com sucesso.',
        complement: updatedComplement,
      });
    });
  });

  describe('getComplementsOfCartItem', () => {
    it('should return the complements of a cart item', async () => {
      const cartItemId = 1;
      const complements = [{ id: 1, complementId: 1, quantity: 2 }];
      jest.spyOn(cartService, 'getComplementsOfCartItem').mockResolvedValue(complements);

      expect(await cartController.getComplementsOfCartItem(cartItemId)).toEqual({ complements });
    });
  });
});