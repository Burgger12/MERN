import React, {Component} from 'react';
import  { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

// Componentes
import TodosList from './component/TodosList.component'
import EditTodos from './component/EditTodos.component'
import CreateTodos from './component/CreateTodos.component'

import logo from './logo.png'
class App extends Component {
  render(){
    return(
      <Router>
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="/" >
                <img src={logo} width="30" height="30" alt="Inicio"/>
              </a>
              <div className="collpase nav-collapse">
                  <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                      <Link to="/" className="nav-link">Todos</Link>
                    </li>
                    <li className="navbar-item">
                      <Link to="/create" className="nav-link">Create Todos</Link>
                    </li>
                  </ul>
              </div>
            </nav>
          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodos} />
          <Route path="/create" component={CreateTodos} />
        </div>
      </Router>
    )
  }
}

export default App;
