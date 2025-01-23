import { Module } from '@nestjs/common';

import { CardapioController } from './controllers/CardapioController';
import { CardapioService } from './services/CardapioService';
import { CardapioRepository } from './repositories/CardapioRepository';

@Module({
  imports: [],
  controllers: [CardapioController],
  providers: [CardapioService, CardapioRepository],
})
export class AppModule {}
