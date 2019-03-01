import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import RecuperacaoSenha from './pages/RecuperacaoSenha';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/cadastro' component={Cadastro}/>
          <Route path='/recuperacao' component={RecuperacaoSenha} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
