import { Injectable } from '@nestjs/common';
import { Cardapio } from 'src/domain/entities/Cardapio';
import { CardapioDTO } from 'src/dto/CardapioDTO';
import { CardapioRepository } from 'src/repositories/CardapioRepository';

@Injectable()
export class CardapioService {
  constructor(private CardapioRepository: CardapioRepository) {}
  findAll() {
    return this.CardapioRepository.findAll();
  }

  findOne(id: string) {
    const cardapio = this.CardapioRepository.findOne(id);
    return cardapio;
  }

  create(input: CardapioDTO) {
    const cardapio = Cardapio.create(input);
    this.CardapioRepository.create(cardapio);
    return {};
  }
}
