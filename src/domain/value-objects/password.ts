const MIN_LENGTH = 6;
const MAX_LENGTH = 20;

export class Password {
  readonly value: string;

  constructor(password: string) {
    this.value = this.handle(password);
  }

  private handle(password: string): string {
    const trimmedPassword = password.trim();

    if (!trimmedPassword) {
      throw new Error('A senha não pode estar vazia.');
    }
    if (trimmedPassword.length < MIN_LENGTH) {
      throw new Error(`A senha deve ter pelo menos ${MIN_LENGTH} caracteres.`);
    }
    if (trimmedPassword.length > MAX_LENGTH) {
      throw new Error(`A senha deve ter no máximo ${MAX_LENGTH} caracteres.`);
    }
    return trimmedPassword;
  }
  static create(password: string): Password {
    return new Password(password);
  }
}
