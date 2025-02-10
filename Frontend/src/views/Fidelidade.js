import React from 'react';
import { Link } from 'react-router-dom';
import './Fidelidade.css';
import paraibavetor from './paraibavetor.svg';

const Fidelidade = () => {
  // Simulação de pedidos do usuário (3 pedidos feitos)
  const pedidosFeitos = 3;
  
  // Array de 10 hot dogs para o programa de fidelidade
  const hotdogs = Array(10).fill(null).map((_, index) => ({
    id: index + 1,
    completed: index < pedidosFeitos
  }));

  // Histórico de pedidos simulado
  const historicoPedidos = [
    {
      id: 1,
      data: '05/02/2025',
      item: 'Hot Dog Especial',
      valor: 'R$ 25,00',
      distancia: '1.2 km'
    },
    {
      id: 2,
      data: '03/02/2025',
      item: 'Hot Dog Tradicional',
      valor: 'R$ 20,00',
      distancia: '1.2 km'
    },
    {
      id: 3,
      data: '01/02/2025',
      item: 'Hot Dog Frango',
      valor: 'R$ 22,00',
      distancia: '1.2 km'
    }
  ];

  return (
    <div className="fidelidade-container">
      <header className="fidelidade-header">
        <h1>Fidelidade</h1>
      </header>

      <div className="hotdog-progress">
        {hotdogs.map((hotdog) => (
          <div 
            key={hotdog.id} 
            className={`hotdog-icon ${hotdog.completed ? 'completed' : ''}`}
          >
            🌭
          </div>
        ))}
      </div>

      <div className="pedidos-lista">
        {historicoPedidos.map((pedido) => (
          <div key={pedido.id} className="pedido-item">
            <div className="pedido-icon">🍽️</div>
            <div className="pedido-info">
              <h3>{pedido.item}</h3>
              <p>{pedido.data} • {pedido.valor} • {pedido.distancia}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fidelidade;
