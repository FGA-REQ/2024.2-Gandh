import './admin.css';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import paraibavetor from './paraibavetor.svg';

function Admin({ onLogout }) {

  const showModal = () => setIsModalVisible(true);
  const hideModal = () => setIsModalVisible(false);
  const handleLogout = () => {
    onLogout();
    hideModal();
  };

  return (
    <div className="Web">

        <div className="logo-container">
                <img src={paraibavetor} alt="Paraíba Hot Dog" className="logo" />
        </div>    
    
      <div className="footer-bar"></div>
    
      <div className="admin-container">
        <h1 className="admin-title">Admin</h1>
        <div className="admin-options">
          <Link to="/clientes" className="admin-option">
            <img src={require('../components/icon-clientes.svg').default} alt="Ícone de clientes" className="icon" />
            <span>Clientes</span>
          </Link>
          <Link to="/cardapio" className="admin-option">
            <img src={require('../components/menu.svg').default} alt="Ícone de clientes" className="icon" />
            <span>Cardapio</span>
          </Link>
          <Link to="pedido" className="admin-option">
            <img src={require('../components/pedidos.svg').default} alt="Ícone de clientes" className="icon" />
            <span>Pedidos</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Admin;
