import { Injectable } from '@nestjs/common';
import { CategoriaDTO } from 'src/dto/CategoriaDTO';

@Injectable()
export class CategoriaRepository {
  private categorias: CategoriaDTO[] = [
    {
      id: '1',
      nome: 'Bebidas',
      itens: [],
    },
    {
      id: '2',
      nome: 'Hot dogs',
      itens: [],
    },
    {
      id: '3',
      nome: 'Smashs',
      itens: [],
    },
  ];

  findAll(): CategoriaDTO[] {
    return this.categorias;
  }

  findOne(id: string): CategoriaDTO | undefined {
    return this.categorias.find((categoria) => categoria.id === id);
  }

  create(categoria: CategoriaDTO): void {
    this.categorias.push(categoria);
  }
}
