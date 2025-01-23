import { ItemDTO } from './ItemDTO';

export type CategoriaDTO = {
  id?: string;
  nome: string;
  itens: ItemDTO[];
};
