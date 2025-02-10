import './pedido.css';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import paraibavetor from './paraibavetor.svg';

function Pedidos() {
  const history = useHistory();

  // Lista de pedidos simulados
  const [pedidos] = useState([
    { id: 1, cliente: "João Silva", horario: "18:30", avaliacao: 5, detalhes: "2 Hot Dogs, 1 Refrigerante" },
    { id: 2, cliente: "Maria Santos", horario: "18:45", avaliacao: 4, detalhes: "1 Hot Dog Especial" },
    { id: 3, cliente: "Pedro Oliveira", horario: "19:00", avaliacao: 3, detalhes: "3 Hot Dogs Simples" },
    { id: 4, cliente: "Ana Costa", horario: "19:15", avaliacao: 5, detalhes: "2 Hot Dogs Duplos" },
    { id: 5, cliente: "Carlos Lima", horario: "19:30", avaliacao: 4, detalhes: "1 Hot Dog Vegano" },
  ]);

  const handlePedidoClick = (pedido) => {
    console.log(`Visualizando pedido do cliente ${pedido.cliente}`);
    history.push(`/visualizarpedido/${pedido.id}`);
  };

  return (
    <div className="pedido">
      <header className="pedido-header">
        <img src={paraibavetor} alt="Paraíba Hot Dog" className="logo" />
        <div className="footer-bar"></div>
      </header>

      <div className="header-icons">
        <div className="icon-container" onClick={() => console.log("Pesquisar")}>
            <img src={require('../components/search.svg').default} alt="Ícone de busca" className="icon" />
        </div>
        <div className="icon-container" onClick={() => history.push('/criarpedido')}>
            <img src={require('../components/add.svg').default} alt="Ícone de adicao" className="icon" />
        </div>
      </div>

      <div className="pedido-list">
        {pedidos.map((pedido) => (
          <div className="pedido-item" key={pedido.id}>
            <span onClick={() => handlePedidoClick(pedido)}>
              Cliente: {pedido.cliente} | Horário: {pedido.horario} | Avaliação: {pedido.avaliacao}⭐
            </span>
            <p>Detalhes do Pedido: {pedido.detalhes}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pedidos;
