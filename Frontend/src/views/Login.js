import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Login.css';
import paraibavetor from './paraibavetor.svg';

const Login = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    email: '',
    senha: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email === 'admin@gmail.com' && formData.senha === '123456') {
      localStorage.setItem('isLoggedIn', 'true');
      history.push('/admin');
    } else {
      // Lógica de login para usuários normais
      localStorage.setItem('isLoggedIn', 'true');
      history.push('/home');
    }
  };

  return (
    <div className="login-container">
      <div className="logo-container">
        <img src={paraibavetor} alt="Paraíba Hot Dog" className="logo" />
      </div>
      
      <div className="form-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
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

          <button type="submit" className="submit-btn">
            Entrar
          </button>
        </form>

        <div className="register-link">
          <p>Não tem uma conta? <a href="/register">Cadastre-se</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
