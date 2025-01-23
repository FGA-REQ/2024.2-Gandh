import { Categoria, CategoriaProps } from './Categoria';
import { Entity } from './Entity';

export type CardapioProps = {
  id?: string;
  nome: string;
  categorias: CategoriaProps[];
};

export class Cardapio extends Entity {
  private constructor(
    public nome: string,
    public categorias: Categoria[],
    id?: string,
  ) {
    super(id);
  }

  static create(props: CardapioProps) {
    const categorias = props.categorias.map((categoria) =>
      Categoria.create({
        id: categoria.id,
        nome: categoria.nome,
        itens: categoria.itens,
      }),
    );
    return new Cardapio(props.nome, categorias, props.id);
  }
}
