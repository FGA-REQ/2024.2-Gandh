import React from 'react';
import { useNavigate } from 'react-router-dom';

const TelaInicial = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 className="titulo-ondulado">Bem-vindo ao Paraíba Hotdog</h1>
      <div className="botoes">
        <button onClick={() => navigate('/login')}>Login</button>
        <button onClick={() => navigate('/cadastro')}>Cadastrar</button>
      </div>
    </div>
  );
};

export default TelaInicial;