import { UUID } from '../value-objects/UUID';

export abstract class Entity {
  protected _id: string;

  constructor(id?: string) {
    this._id = id ?? new UUID().value;
  }

  get id(): string {
    return this._id;
  }
}
