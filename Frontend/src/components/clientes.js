import './clientes.css';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import paraibavetor from './paraibavetor.svg';

function Clientes() {
  const history = useHistory();

  // Lista de itens simulados
  const [clientes] = useState([
    { id_cliente: 1, nome: "Cliente numero 1" },
    { id_cliente: 2, nome: "Cliente numero 2" },
    { id_cliente: 3, nome: "Cliente numero 3" },
    { id_cliente: 4, nome: "Cliente numero 4" },
    { id_cliente: 5, nome: "Cliente numero 5" },
  ]);

  const handleClientClick = (cliente) => {
    console.log(`Visualizando cliente: ${cliente.nome}`);
    history.push(`/visualizarcliente/${cliente.id_cliente}`);
  };

  const handleDelete = (cliente) => {
    console.log(`Excluindo cliente: ${cliente.nome}`);
    // Apenas simula exclusão no console
  };

  return (
    <div className="Web">
      <header className="Web-header">
       <img src={paraibavetor} alt="Paraíba Hot Dog" className="logo" />
        <div className="footer-bar"></div>
      </header>

      <div className="header-icons">
        <div className="icon-container" onClick={() => console.log("Pesquisar")}>
            <img src={require('../components/search.svg').default} alt="Ícone de busca" className="icon" />
        </div>
        <div className="icon-container" onClick={() => history.push('/criarcliente')}>
            <img src={require('../components/add.svg').default} alt="Ícone de adicao" className="icon" />
        </div>
        <div className="icon-container" onClick={() => console.log("Filtrar")}>
            <img src={require('../components/filter.svg').default} alt="Ícone de filtro" className="icon" />
        </div>
      </div>

      <div className="client-list">
        {clientes.map((cliente) => (
          <div className="client-item" key={cliente.id_cliente}>
            <span onClick={() => handleClientClick(cliente)}>{cliente.nome}</span>
            <button className="delete-button" onClick={() => handleDelete(cliente)}>
                <img src={require('../components/trash.svg').default} alt="Ícone de deletar" className="icon" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Clientes;
