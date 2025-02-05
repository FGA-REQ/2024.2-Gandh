import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'
import paraibavetor from './paraibavetor.svg'

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="logo-container">
        <img src={paraibavetor} alt="Paraíba Hot Dog" className="logo" />
      </div>
      <div className="content-container">
        <h1>Bem-vindo ao Paraíba HotDog</h1>
        <p>O cachorro quente mais arretado do centro-oeste</p>
        <div className="button-container">
          <Link to="/login" className="button">Login</Link>
          <Link to="/register" className="button">Cadastro</Link>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
