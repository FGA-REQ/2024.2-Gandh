import React from 'react';
import Cardapio from '../components/cardapio';
import Menu from './Menu';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { cardapio } from '../components/cardapio'; // Import the menulanches list
import Hero17 from '../components/hero17';
import { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import paraibavetor from './paraibavetor.svg';

const Item = () => {
    const { id } = useParams();

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
                <Link to="/home" className="back-button">
                    <img src={paraibavetor} alt="Logo" className="menu-logo" />
                </Link>
            </div>
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
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <h1>Lanche ID: {id}</h1>
            </div>


      <div className="header-icons">
        <div className="icon-container" onClick={() => console.log("Comprar")}>
            <img src={require('../components/carrinho.svg').default} alt="Ícone de compra" className="icon" />
            Adicionar ao carrinho
        </div>
      </div>
        </div>
    );
};

export default Item;
