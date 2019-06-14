import React from 'react';
import { Link } from 'react-router-dom';
import {Navbar, Nav, Form,FormControl,Button } from 'react-bootstrap'
import './header.css';


// import { Container } from './styles';

export default function Header() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Aquinos</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="">Home</Nav.Link>
                    <Nav.Link href="Clientes">Clientes</Nav.Link>
                    <Nav.Link href="Funcionarios">Funcionarios</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
            {/* <br />
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-light">Search</Button>
                </Form>
            </Navbar>
            <header id='main-header'>
                <div className="main-content">
                    <h1>
                        <img src="https://cdn0.iconfinder.com/data/icons/foody-icons/32/FoodyIcons_color-06-512.png" alt="Aquinos" />
                        <Link to="/">
                            Aquinos Burguer
                    </Link>
                    </h1>
                    <img style={{ width: "5%" }} src="https://cdn0.iconfinder.com/data/icons/foody-icons/32/FoodyIcons_color-06-512.png" alt="Aquinos" />
                </div>
            </header> */}
        </>
    );
}
