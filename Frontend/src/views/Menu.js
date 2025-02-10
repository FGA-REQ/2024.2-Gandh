import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import paraibavetor from './paraibavetor.svg';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('PROMOÇÕES');
  
  const categories = [
    { id: 1, name: 'Tradicionais' },
    { id: 2, name: 'PROMOÇÕES' },
    { id: 3, name: 'Especiais' },
    { id: 4, name: 'Frango' },
    { id: 5, name: 'Combo' }
  ];

  const menuItems = [
    { id: 1, title: 'Title', price: 'Preço', image: 'placeholder.jpg' },
    { id: 2, title: 'Title', price: 'Preço', image: 'placeholder.jpg' },
    { id: 3, title: 'Title', price: 'Preço', image: 'placeholder.jpg' },
    { id: 4, title: 'Title', price: 'Preço', image: 'placeholder.jpg' },
    { id: 5, title: 'Title', price: 'Preço', image: 'placeholder.jpg' },
    { id: 6, title: 'Title', price: 'Preço', image: 'placeholder.jpg' },
    { id: 7, title: 'Title', price: 'Preço', image: 'placeholder.jpg' },
    { id: 8, title: 'Title', price: 'Preço', image: 'placeholder.jpg' },
    { id: 9, title: 'Title', price: 'Preço', image: 'placeholder.jpg' },
    { id: 10, title: 'Title', price: 'Preço', image: 'placeholder.jpg' }
  ];

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
        <h2 className="section-title">{selectedCategory}</h2>
        <div className="menu-grid">
          {menuItems.map(item => (
            <div key={item.id} className="menu-item">
              <div className="menu-item-image">
                <div className="placeholder-image"></div>
              </div>
              <div className="menu-item-info">
                <h3>{item.title}</h3>
                <p>{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Menu;
