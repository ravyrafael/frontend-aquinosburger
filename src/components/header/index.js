import React from 'react';
import {
  Navbar, Nav, Form, FormControl, Button,
} from 'react-bootstrap';
import './header.css';
import { FaHamburger } from 'react-icons/fa';
import { routes } from '../../Utils/routeUtils.js'



export default function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="Home"><FaHamburger /></Navbar.Brand>
        <Nav className="mr-auto">
          {routes.map(item=>{
            return (<Nav.Link key={item.name} href={item.path}>{item.icone()}{item.name}</Nav.Link>)
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

