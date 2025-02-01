import { Module } from '@nestjs/common';
import { CardController } from '../controllers/card.controller';
import { CardService } from '../services/card.service';
import { CardRepository } from '../repositories/card.repository';

@Module({
  controllers: [CardController],
  providers: [CardService, CardRepository],
  exports: [CardService],
})
export class CardModule {}
