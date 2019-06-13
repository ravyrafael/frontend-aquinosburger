import React from 'react';
import { Link } from 'react-router-dom'; 

import './header.css';


// import { Container } from './styles';

export default function Header() {
    return (
        <header id='main-header'>
            <div className="main-content">
                <h1>
                    <img src="https://cdn0.iconfinder.com/data/icons/foody-icons/32/FoodyIcons_color-06-512.png" alt="Aquinos"/>
                    <Link to="/">
                        Aquinos Burguer
                    </Link>
                </h1>
                <img style={{width:"5%"}} src="https://cdn0.iconfinder.com/data/icons/foody-icons/32/FoodyIcons_color-06-512.png" alt="Aquinos"/>
            </div>
        </header>
    );
}
