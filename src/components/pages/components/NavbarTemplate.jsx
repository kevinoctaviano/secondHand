import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import brand from '../../assets/svg/brand.svg';
export default function NavbarTemplate({ name }) {
  return (
    <Navbar bg="light shadow-sm" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src={brand} alt="brand" className="custom-logo-navbar" />
        </Navbar.Brand>
        <Nav className="mx-auto">
          <p
            className="fw-bold"
            style={{
              fontSize: '16px',
              color: '#000',
              marginBottom: '0px',
              marginRight: '100px',
            }}
          >
            {name}
          </p>
        </Nav>
      </Container>
    </Navbar>
  );
}
