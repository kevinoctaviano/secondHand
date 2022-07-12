import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import brand from '../../assets/svg/brand.svg';

export default function NavbarInfoProduct() {
  return (
    <Navbar bg="light shadow-sm" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src={brand} alt="brand" className="custom-logo-navbar" />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
