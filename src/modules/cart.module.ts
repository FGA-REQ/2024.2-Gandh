import { Module } from '@nestjs/common';
import { CartController } from '../controllers/cart.controller';
import { CartService } from '../services/cart.service';
import { CartRepository } from '../repositories/cart.repository';

@Module({
  controllers: [CartController],
  providers: [CartService, CartRepository],
  exports: [CartService],
})
export class CartModule {}
