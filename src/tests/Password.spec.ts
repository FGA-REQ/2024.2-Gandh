import { Password } from '../domain/value-objects/password';

describe('Password', () => {
  it('deve aceitar senhas que correspondem', () => {
    const password = new Password('senha123');
    expect(password.value).toBe('senha123');
  });

  it('deve lançar um erro se a senhas não tiver tamanho minimo', () => {
    expect(() => new Password('1234')).toThrow(
      'A senha deve ter pelo menos 6 caracteres.',
    );
  });
  it('deve lançar um erro se a senha exceder o tamanho máximo', () => {
    expect(() => new Password('senha1234567890123456789')).toThrow(
      'A senha deve ter no máximo 20 caracteres.',
    );
  });

  it('deve lançar um erro se a senha tiver apenas espaços em branco', () => {
    expect(() => new Password('   ')).toThrow('A senha não pode estar vazia.');
  });

  it('deve lançar um erro se a senha for uma string vazia ', () => {
    expect(() => new Password('')).toThrow('A senha não pode estar vazia.');
  });
});
