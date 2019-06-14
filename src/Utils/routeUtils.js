import {FaChrome, FaUser} from 'react-icons/fa';
import Dashboard from '../views/Dashboard';
import Funcionarios from '../views/Funcionarios';
import Clientes from '../views/Clientes';

 export const routes = 
 [
    {
    path: "/",
    name: "Dashboard",
    icone: FaChrome,
    component:Dashboard
    },
    
    {
        path: "/Clientes",
    name: "Clientes",
    icone: FaUser,
    component: Funcionarios
    },
    {
        path: "/Funcionarios",
    name: "Funcionarios",
    icone: FaUser,
    component:Clientes
    }
]
