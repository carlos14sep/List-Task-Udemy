import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Contactos from './components/Contactos';
import Inicio from './components/Inicio';
import Nosotros from './components/Nosotros';
import Users from './components/Users';

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <div className="btn-group mr-4">
          {/* link funciona como el navbar
          navlink resalta la pestaña donde estas parado */}
          <NavLink to="/" className="btn btn-dark" activeClassName="active">
            Inicio
          </NavLink>
          <NavLink to="/Contactos" className="btn btn-dark" activeClassName="active">
            Contactos
          </NavLink>
          <NavLink to="/Nosotros" className="btn btn-dark" activeClassName="active">
            Nosotros
          </NavLink>
        </div>
        {/* Aca se ponen los componentes dinamicos con la propiedad switch */}
        <Switch>
          <Route path="/nosotros/:id">
            <Users />
          </Route>
          <Route path="/Contactos">
            <Contactos />
          </Route>
          <Route path="/Nosotros">
            <Nosotros />
          </Route>
          <Route path="/" exact>
            <Inicio />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
