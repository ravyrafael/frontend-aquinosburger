import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from './views/Dashboard';
import Funcionarios from './views/Funcionarios';
import Clientes from './views/Clientes';
import Error404 from './views/Error404';


export default () => {
    return (
        <Switch>
            <Route path='/Dashboard' exact component={Dashboard}></Route>
            <Route path='/Clientes' exact component={Clientes}></Route>
            <Route path='/Funcionarios' exact component={Funcionarios}></Route>
            
            <Route path='/Erro404' exact component={Error404}></Route>
            <Redirect path='/home' to='/Dashboard'/>
            <Redirect path='*' to='/Erro404'/>
        </Switch>
    );
}