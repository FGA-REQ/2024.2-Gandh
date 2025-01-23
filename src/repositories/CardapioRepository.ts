import { Injectable } from '@nestjs/common';
import { Cardapio } from 'src/domain/entities/Cardapio';
import { CardapioDTO } from 'src/dto/CardapioDTO';

@Injectable()
export class CardapioRepository {
  private CARDAPIOS: CardapioDTO[] = [
    {
      id: '1',
      nome: 'Cardápio 1',
      categorias: [
        {
          id: '20',
          nome: 'bebidas',
          itens: [
            {
              id: '30',
              nome: 'Coca-cola',
              ingredientes: [],
              descricao: 'Lata 350ML',
              preco: 10,
            },
          ],
        },
        {
          id: '21',
          nome: 'hot dogs',
          itens: [
            {
              id: '31',
              nome: 'Tradicional',
              ingredientes: ['Pão', 'Salsicha', 'Queijo'],
              preco: 10,
            },
          ],
        },
      ],
    },
    {
      id: '2',
      nome: 'Cardápio 2',
      categorias: [
        {
          id: '22',
          nome: 'bebidas',
          itens: [
            {
              id: '32',
              nome: 'Suco de laranja',
              ingredientes: [],
              descricao: '300ML',
              preco: 10,
            },
          ],
        },
        {
          id: '23',
          nome: 'hot dogs',
          itens: [
            {
              id: '33',
              nome: 'Arretado',
              ingredientes: ['Pão', 'Salsicha', 'Queijo', 'Carne'],
              preco: 20,
            },
          ],
        },
      ],
    },
  ];

  findAll() {
    return this.CARDAPIOS;
  }

  findOne(id: string) {
    return this.CARDAPIOS.find((cardapio) => cardapio.id === id);
  }

  create(cardapio: Cardapio) {
    this.CARDAPIOS.push(cardapio);
    return 'Criado com sucesso';
  }
}
