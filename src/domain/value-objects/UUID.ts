export class UUID {
  readonly value: string;

  constructor(value?: string) {
    this.value = this.handle(value);
  }

  private handle(value?: string) {
    if (!value) return this.generateUUID();
    else if (this.isValid(value)) return value;
    else throw new Error('UUID inválido!');
  }

  private generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        const r = (Math.random() * 16) | 0;
        const v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      },
    );
  }

  private isValid(value: string) {
    return /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
      value,
    );
  }
}
