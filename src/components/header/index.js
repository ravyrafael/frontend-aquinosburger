import React from 'react';
import {
  Navbar, Nav, Form, FormControl, Button,
} from 'react-bootstrap';
import './header.css';
import { FaHamburger } from 'react-icons/fa';
import {navigator} from '../../Utils/routeUtils.js'



export default function Header() {
  console.log(navigator)
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="Home"><FaHamburger /></Navbar.Brand>
        <Nav className="mr-auto">
          {navigator.map(item=>{
            console.log(item);
            return (<Nav.Link key={item.link} href={item.link}>{item.icone()}{item.nome}</Nav.Link>)
          })}
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </>
  );
}

