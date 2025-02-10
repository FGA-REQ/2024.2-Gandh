import { Email } from '../domain/value-objects/Email';

describe('Email', () => {
  it('deve criar um email válido', () => {
    const email = new Email('test@example.com');
    expect(email.value).toBe('test@example.com');
  });

  it('deve lançar um erro se o email for inválido', () => {
    expect(() => new Email('invalid-email')).toThrow('Email inválido.');
  });

  it('deve lançar um erro se o email não tiver "@"', () => {
    expect(() => new Email('testexample.com')).toThrow('Email inválido.');
  });

  it('deve lançar um erro se o email tiver um domínio inválido', () => {
    expect(() => new Email('test@com')).toThrow('Email inválido.');
  });

  it('deve lançar um erro se o email tiver caracteres inválidos', () => {
    expect(() => new Email('test@exa!mple.com')).toThrow('Email inválido.');
  });

  it('deve lançar um erro se o email exceder o tamanho máximo', () => {
    const longEmail = `${'a'.repeat(250)}@example.com`;
    expect(() => new Email(longEmail)).toThrow('Email muito grande.');
  });

  it('deve aceitar um email no tamanho limite', () => {
    const maxLengthEmail = `${'a'.repeat(243)}@example.com`;
    const email = new Email(maxLengthEmail);
    expect(email.value).toBe(maxLengthEmail);
  });

  it('deve lançar um erro se o email for vazio', () => {
    expect(() => new Email('')).toThrow('Email inválido.');
  });

  it('deve aceitar emails com subdomínios válidos', () => {
    const email = new Email('user@sub.example.com');
    expect(email.value).toBe('user@sub.example.com');
  });

  it('deve lançar um erro se o domínio estiver faltando', () => {
    expect(() => new Email('user@.com')).toThrow('Email inválido.');
  });

  it('deve lançar um erro se o TLD (domínio de nível superior) for inválido', () => {
    expect(() => new Email('user@example.c')).toThrow('Email inválido.');
  });
});
