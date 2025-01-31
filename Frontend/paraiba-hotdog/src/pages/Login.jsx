import React from 'react';

const Login = () => {
  return (
    <div className="container">
      <h1 className="titulo-ondulado">Login</h1>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="senha">Senha</label>
          <input type="password" id="senha" required />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;