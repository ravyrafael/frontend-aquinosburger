import { FaChrome, FaUser,FaReceipt } from 'react-icons/fa';
import Dashboard from '../views/Dashboard';
import Funcionarios from '../views/Funcionarios';
import Clientes from '../views/Clientes';
import Cidades from '../views/Cidades';
import Orders from '../views/Orders';
export const routes =
    [
        {
            path: "/",
            name: "Dashboard",
            icone: FaChrome,
            component: Dashboard
        },

        {
            path: "/Clientes",
            name: "Clientes",
            icone: FaUser,
            component: Clientes
        },
        {
            path: "/Funcionarios",
            name: "Funcionarios",
            icone: FaUser,
            component: Funcionarios
        },
        {
            path: "/Cidades",
            name: "Cidades",
            icone: FaUser,
            component: Cidades
        },
        {
            path: "/Orders",
            name: "Pedidos",
            icone: FaReceipt,
            component: Orders
        },
        {
            path: "/products/ProductsList",
            name: "Lista De Produtos",
            icone: FaReceipt,
            component: Orders
        }
    ]
