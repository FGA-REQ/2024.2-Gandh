export class Phone {
  readonly value: string;

  constructor(value: string) {
    this.value = this.validateAndReturnValue(value);
  }

  private validateAndReturnValue(value: string): string {
    const cleanedValue = this.removeSpaces(value);
    if (!value) {
      throw new Error('O telefone deve conter exatamente 11 dígitos.');
    }
    if (!this.isNumeric(cleanedValue)) {
      throw new Error('O telefone deve conter apenas números.');
    }
    if (!this.isCorrectLength(cleanedValue)) {
      throw new Error('O telefone deve conter exatamente 11 dígitos.');
    }

    return cleanedValue;
  }

  private removeSpaces(value: string): string {
    return value.replace(/[\s-]+/g, '');
  }

  private isNumeric(value: string): boolean {
    return /^\d+$/.test(value);
  }

  private isCorrectLength(value: string): boolean {
    return value.length === 11;
  }

  static create(value: string): Phone {
    return new Phone(value);
  }
}
