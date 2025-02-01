import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Bem-vindo ao Paraíba HotDog</h1>
      <div className="button-container">
        <Link to="/login" className="button">Login</Link>
        <Link to="/register" className="button">Cadastro</Link>
      </div>
    </div>
  )
}

export default LandingPage
