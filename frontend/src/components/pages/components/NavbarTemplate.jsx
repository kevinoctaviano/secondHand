import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

export default function NavbarTemplate({ name }) {
  return (
    <Navbar bg="light shadow-sm" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <div className="custom-logo-navbar"></div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link
              className="fw-bold"
              href="#"
              style={{ fontSize: '16px', color: '#000' }}
            >
              {name}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
