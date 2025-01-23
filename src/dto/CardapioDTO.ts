import { CategoriaDTO } from './CategoriaDTO';

export type CardapioDTO = {
  id?: string;
  nome: string;
  categorias: CategoriaDTO[];
};
