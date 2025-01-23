import { Item, ItemProps } from './Item';
import { Entity } from './Entity';

export type CategoriaProps = {
  id?: string;
  nome: string;
  itens: ItemProps[];
};

export class Categoria extends Entity {
  private constructor(
    public nome: string,
    public itens: Item[],
    id?: string,
  ) {
    super(id);
  }

  static create(props: CategoriaProps) {
    const itens = props.itens.map((item) => Item.create(item));
    return new Categoria(props.nome, itens, props.id);
  }
}
