import React from 'react';
import { Link } from 'react-router-dom';
import './Fidelidade.css';
import paraibavetor from './paraibavetor.svg';
import Hero17 from '../components/hero17';
import { Fragment } from 'react';


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


             <Link to="/home" className="back-button">
          <img src={paraibavetor} alt="Logo" className="menu-logo" />
           </Link> 
            <Hero17
                            div
                            action2={
                                <Fragment>
                                    <span className="home-text114">Fidelidade</span>
                                </Fragment>
                            }
                            action1={
                                <Fragment>
                                    <span className="home-text115">Menu</span>
                                </Fragment>
                            }
                            action3={
                                <Fragment>
                                    <span className="home-text115">Sobre</span>
                                </Fragment>
                            }
                            action4={
                                <Fragment>
                                    <span className="home-text115">Carrinho</span>
                                </Fragment>
                            }
                            heading1={
                                <Fragment>
                                    <span className="home-text116">
                                        Paraíba HotDog
                                    </span>
                                </Fragment>
                            }
                            content1={
                                <Fragment>
                                    <span className="home-text117">
                                        O cachorro quente mais arretado do centro-oeste
                                    </span>
                                </Fragment>
                            }
                        ></Hero17>




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
