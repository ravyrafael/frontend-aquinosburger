import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Dashboard from './views/Dashboard';
import Funcionarios from './views/Funcionarios';
import Clientes from './views/Clientes';


export default () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}></Route>
            <Route path='/clientes' component={Clientes}></Route>
            <Route path='/funcionarios' component={Funcionarios}></Route>
        </Switch>
    );
}