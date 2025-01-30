import { Phone } from '../domain/value-objects/Phone';

describe('Phone', () => {
  it('deve criar um telefone válido', () => {
    const phone = new Phone('12345678901');
    expect(phone.value).toBe('12345678901');
  });

  it('deve aceitar telefones com hifens', () => {
    const phone = new Phone('61-3456 789 01');
    expect(phone.value).toBe('61345678901');
  });
  it('deve aceitar telefones com espaços', () => {
    const phone = new Phone('123 456 789 01');
    expect(phone.value).toBe('12345678901');
  });
  it('deve lançar um erro se o telefone tiver menos de 11 dígitos', () => {
    expect(() => new Phone('123456789')).toThrow(
      'O telefone deve conter exatamente 11 dígitos.',
    );
  });

  it('deve lançar um erro se o telefone tiver mais de 11 dígitos', () => {
    expect(() => new Phone('123456789012')).toThrow(
      'O telefone deve conter exatamente 11 dígitos.',
    );
  });

  it('deve lançar um erro se o telefone contiver caracteres não numéricos', () => {
    expect(() => new Phone('61%985612116')).toThrow(
      'O telefone deve conter apenas números.',
    );
  });

  it('deve lançar um erro se o telefone for vazio', () => {
    expect(() => new Phone('')).toThrow(
      'O telefone deve conter exatamente 11 dígitos.',
    );
  });

  it('deve lançar um erro se o telefone for apenas espaços', () => {
    expect(() => new Phone('          1')).toThrow(
      'O telefone deve conter exatamente 11 dígitos.',
    );
  });
});
