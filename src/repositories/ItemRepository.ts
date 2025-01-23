import { Injectable } from '@nestjs/common';
import { ItemDTO } from '../dto/ItemDTO';

@Injectable()
export class ItemRepository {
  private itens: ItemDTO[] = [
    {
      id: '1',
      nome: 'Coca-cola',
      preco: 5,
    },
    {
      id: '2',
      nome: 'Guaraná',
      preco: 5,
    },
    {
      id: '3',
      nome: 'Fanta',
      preco: 5,
    },
  ];

  findAll(): ItemDTO[] {
    return this.itens;
  }
  findOne(id: string): ItemDTO | undefined {
    return this.itens.find((item) => item.id === id);
  }
  create(item: ItemDTO): void {
    this.itens.push(item);
  }
}
