import './itensCarrinho.css';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import paraibavetor from './paraibavetor.svg';

function ItensCarrinho() {
  const history = useHistory();

  // Lista de itens simulados
  const [ItensCarrinho] = useState([
    { id_lanche: 1, nome: "lanche numero 1" },
    { id_lanche: 2, nome: "lanche numero 2" },
    { id_lanche: 3, nome: "lanche numero 3" },
    { id_lanche: 4, nome: "lanche numero 4" },
    { id_lanche: 5, nome: "lanche numero 5" },
  ]);

  const handleClientClick = (lanche) => {
    console.log(`Visualizando lanche: ${lanche.nome}`);
    history.push(`/visualizarlanche/${lanche.id_lanche}`);
  };

  const handleDelete = (lanche) => {
    console.log(`Excluindo lanche: ${lanche.nome}`);
    // Apenas simula exclusão no console
  };

  return (
    <div className="tela">
      <header className="tela-header">
      </header>

      <div className="header-icons">
        <div className="icon-container" onClick={() => console.log("Comprar")}>
            <img src={require('../components/carrinho.svg').default} alt="Ícone de compra" className="icon" />
        </div>
      </div>

      <div className="client-list">
        {ItensCarrinho.map((lanche) => (
          <div className="client-item" key={lanche.id_lanche}>
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

export default ItensCarrinho;
