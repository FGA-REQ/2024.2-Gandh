import { Entity } from './Entity';

export type ItemProps = {
  id?: string;
  nome: string;
  ingredientes?: string[];
  preco: number;
  descricao?: string;
};

export class Item extends Entity {
  private constructor(
    public nome: string,
    public preco: number,
    public ingredientes?: string[],
    public descricao?: string,
    id?: string,
  ) {
    super(id);
  }

  static create(props: ItemProps) {
    return new Item(
      props.nome,
      props.preco,
      props.ingredientes,
      props.descricao,
      props.id,
    );
  }
}
