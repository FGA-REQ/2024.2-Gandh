import './cardapio.css';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import paraibavetor from './paraibavetor.svg';
import { menulanches } from '../views/menulanches.js';

function Cardapio() {
  const history = useHistory();


  const handleClientClick = (lanche) => {
    console.log(`Visualizando lanche: ${lanche.nome}`);
    history.push(`/visualizarlanche/${lanche.id}`);
    return lanche;
  };

  const handleDelete = (lanche) => {
    console.log(`Excluindo lanche: ${lanche.nome}`);
    // Apenas simula exclusão no console
  };

  return (
    <div className="tela">
      <header className="tela-header">
       <img src={paraibavetor} alt="Paraíba Hot Dog" className="logo" />
        <div className="footer-bar"></div>
      </header>

      <div className="header-icons">
        <div className="icon-container" onClick={() => console.log("Pesquisar")}>
            <img src={require('../components/search.svg').default} alt="Ícone de busca" className="icon" />
        </div>
        <div className="icon-container" onClick={() => history.push('/criarlanche')}>
            <img src={require('../components/add.svg').default} alt="Ícone de adicao" className="icon" />
        </div>
        <div className="icon-container" onClick={() => console.log("Filtrar")}>
            <img src={require('../components/filter.svg').default} alt="Ícone de filtro" className="icon" />
        </div>
      </div>

      <div className="client-list">
        {menulanches.map((lanche) => (
          <div className="client-item" key={lanche.id}>
            <span onClick={() => handleClientClick(lanche)}>{lanche.nome}</span>
            <button className="delete-button" onClick={() => handleDelete(lanche)}>
                <img src={require('../components/trash.svg').default} alt="Ícone de deletar" className="icon" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cardapio;
