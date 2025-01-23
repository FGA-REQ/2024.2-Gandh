import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CardapioDTO } from 'src/dto/CardapioDTO';
import { CardapioService } from 'src/services/CardapioService';

@Controller('/cardapio')
export class CardapioController {
  constructor(private readonly cardapioService: CardapioService) {}

  @Get()
  findAll(): CardapioDTO[] {
    return this.cardapioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): CardapioDTO | undefined {
    return this.cardapioService.findOne(id);
  }

  @Post()
  create(@Body() createCardapioDto: CardapioDTO): { message: string } {
    this.cardapioService.create(createCardapioDto);
    return { message: 'Cardápio criado com sucesso' };
  }
}
