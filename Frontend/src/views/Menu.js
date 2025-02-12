import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import paraibavetor from './paraibavetor.svg';
import Cardapio from '../components/cardapio.js';
import { useHistory } from "react-router-dom";
import { menulanches } from './menulanches.js';

const Menu = () => {

  const history = useHistory();
  const [selectedCategory, setSelectedCategory] = useState('PROMOÇÕES');
  
  const categories = [
    { id: 1, name: 'Tradicionais' },
    { id: 2, name: 'PROMOÇÕES' },
    { id: 3, name: 'Especiais' },
    { id: 4, name: 'Frango' },
    { id: 5, name: 'Combo' }
  ];

  

  const handleClientClick = (lanche) => {
    console.log(`Visualizando lanche: ${lanche.nome}`);
    history.push(`/visualizarlanche/${lanche.id}`);
    return lanche;
  };



  return (
    <div className="menu-page">
      <header className="menu-header">
        <Link to="/home" className="back-button">
          <img src={paraibavetor} alt="Logo" className="menu-logo" />
        </Link>
        <nav className="menu-nav">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-button ${selectedCategory === category.name ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.name)}
            >
              {category.name}
            </button>
          ))}
        </nav>
      </header>

      <main className="menu-grid-container">
        <h2 className="section-nome">{selectedCategory}</h2>
        <div className="menu-grid">
          {menulanches.map(lanche => (
            <div key={lanche.id} className="menu-lanche">
              

              <div className="menu-lanche-image">
                <div className="placeholder-image"></div>
              </div>
              <div className="menu-lanche-info">
                <h3><span onClick={() => handleClientClick(lanche)}>{lanche.nome}</span></h3>
                <p>{lanche.price}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Menu;
