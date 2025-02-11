import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import './style.css'
import LandingPage from './views/LandingPage'
import Login from './views/Login'
import Register from './views/Register'
import Home from './views/home'
import NotFound from './views/not-found'
import Menu from './views/Menu'
import Fidelidade from './views/Fidelidade'
import Admin from './components/admin'
import Clientes from './components/clientes'
import Cardapio from './components/cardapio'
import Pedido from './components/pedido'
import Carrinho from './views/Carrinho'

const isAuthenticated = () => {
  return localStorage.getItem('isLoggedIn') === 'true';
};

// Componente para rotas protegidas
const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = () => {
    // Implemente sua lógica de verificação de autenticação aqui
    return localStorage.getItem('isLoggedIn') === 'true'
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  )
}

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={Login} />
        <Route path="/admin" component={Admin} />
        <Route path="/clientes" component={Clientes} />
        <Route path="/cardapio" component={Cardapio} />
        <Route path="/pedido" component={Pedido} />
        <Route path="/register" component={Register} />
        <Route path="/menu" component={Menu} />
        <Route path="/fidelidade" component={Fidelidade} />
        <Route path="/carrinho" component={Carrinho} />

        

      
        <Route 
          path="/home" 
          render={() => (
            isAuthenticated() ? <Home /> : <Redirect to="/login" />
          )} 
        />

        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
