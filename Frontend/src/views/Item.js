import React from 'react';
import Cardapio from '../components/cardapio';
import Menu from './Menu';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { cardapio } from '../components/cardapio'; // Import the menulanches list


const Item = () => {
    const { id } = useParams();

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Lanche ID: {id}</h1>
        </div>
    );
};

export default Item;