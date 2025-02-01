import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import LandingPage from './views/LandingPage'
import Login from './views/Login'
import Register from './views/Register'
import Home from './views/home'
import NotFound from './views/not-found'

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
        <Route path="/register" component={Register} />
        <PrivateRoute path="/home" component={Home} />
        <Route component={NotFound} path="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
