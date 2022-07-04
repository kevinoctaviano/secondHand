import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

export default function NavbarInfoProduct() {
  return (
    <Navbar bg="light shadow-sm" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <div className="custom-logo-navbar"></div>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
