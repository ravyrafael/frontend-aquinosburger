import React from 'react';
import './header.css'

// import { Container } from './styles';

export default function Header() {
    return (
        <header id='main-header'>
            <div className="main-content">
                <img style={{width:"5%"}} src="https://cdn0.iconfinder.com/data/icons/foody-icons/32/FoodyIcons_color-06-512.png" alt="Aquinos"/>
                <img style={{width:"5%"}} src="https://cdn0.iconfinder.com/data/icons/foody-icons/32/FoodyIcons_color-06-512.png" alt="Novo"/>
            </div>
        </header>
    );
}
