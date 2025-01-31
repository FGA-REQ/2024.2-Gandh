import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SenhaForca from './SenhaForca';

const FormCadastro = () => {
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (senha !== confirmarSenha) {
      setMensagemErro('As senhas não coincidem!');
      return;
    }

    if (senha.length < 6) {
      setMensagemErro('A senha deve ter pelo menos 6 caracteres.');
      return;
    }

    setMensagemErro('');
    alert('Cadastro realizado com sucesso!');
    navigate('/'); // Redireciona para a tela inicial após o cadastro
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="nomeCompleto">Nome Completo</label>
        <input
          type="text"
          id="nomeCompleto"
          value={nomeCompleto}
          onChange={(e) => setNomeCompleto(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="senha">Senha</label>
        <input
          type="password"
          id="senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
          minLength={6}
        />
        <SenhaForca senha={senha} />
      </div>
      <div className="form-group">
        <label htmlFor="confirmarSenha">Confirmar Senha</label>
        <input
          type="password"
          id="confirmarSenha"
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
          required
          minLength={6}
        />
      </div>
      {mensagemErro && <p className="mensagem-erro">{mensagemErro}</p>}
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default FormCadastro;