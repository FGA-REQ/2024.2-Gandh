const MAX_LENGTH = 255;

export class Email {
  readonly value: string;
  constructor(value: string) {
    this.value = this.handle(value);
  }

  private handle(value: string): string {
    if (this.isValidEmail(value)) {
      return value;
    }
    throw new Error('Email inválido.');
  }

  private isSafeLength(value: string) {
    const isSafe = value.length <= MAX_LENGTH;
    if (!isSafe) throw new Error('Email muito grande.');
    return isSafe;
  }

  private isEmailFormat(value: string) {
    const isValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
      value,
    );
    if (!isValid) throw new Error('Email inválido.');
    return isValid;
  }

  private isValidEmail(value: string) {
    return this.isEmailFormat(value) && this.isSafeLength(value);
  }

  static create(value: string): Email {
    return new Email(value);
  }
}
