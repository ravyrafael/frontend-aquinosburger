import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './views/Dashboard';
import Funcionarios from './views/Funcionarios';
import Clientes from './views/Clientes';
import Error404 from './views/Error404';


export default () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}></Route>
            <Route path='/Clientes' component={Clientes}></Route>
            <Route path='/Funcionarios' component={Funcionarios}></Route>
            
            <Route path='*' component={Error404}></Route>
        </Switch>
    );
}