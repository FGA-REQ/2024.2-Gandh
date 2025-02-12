import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import ItensCarrinho from '../components/itensCarrinho';
import paraibavetor from './paraibavetor.svg';
import './Carrinho.css'; // Import the CSS file
import Hero17 from '../components/hero17';
import { Fragment } from 'react';

const Carrinho = () => {
    return (
        
        <div>
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

              
           <div className="footer-bar"></div>

            <ItensCarrinho />

            {
            
            /* Add your cart components and logic here */}
        </div>
    );
};

export default Carrinho;