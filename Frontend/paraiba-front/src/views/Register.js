import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Register.css'

const Register = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de registro aqui
    history.push('/login');
  };

  return (
    <div className="register-container">
      <div className="logo-container">
        <img src="/logo.png" alt="Paraíba Hot Dog" className="logo" />
      </div>
      
      <div className="form-box">
        <h2>Cadastro</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="nome"
              placeholder="Nome completo"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              name="senha"
              placeholder="Senha"
              value={formData.senha}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              name="confirmarSenha"
              placeholder="Confirmar senha"
              value={formData.confirmarSenha}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Cadastrar
          </button>
        </form>

        <div className="login-link">
          <p>Já tem uma conta? <a href="/login">Faça login</a></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
