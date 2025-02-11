import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import ItensCarrinho from '../components/itensCarrinho';
import paraibavetor from './paraibavetor.svg';
import './Carrinho.css'; // Import the CSS file

const Carrinho = () => {
    return (
        <div>
            <h1>Carrinho</h1>

            <Link to="/home" className="back-button">
          <img src={paraibavetor} alt="Logo" className="menu-logo" />
           </Link>    
           <div className="footer-bar"></div>

            <ItensCarrinho />

            {
            
            /* Add your cart components and logic here */}
        </div>
    );
};

export default Carrinho;