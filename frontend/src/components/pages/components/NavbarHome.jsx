import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRightToBracket,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

export default function NavbarHome() {
  return (
    <Navbar bg="light shadow-sm" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <div className="custom-logo-navbar"></div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex wrapper">
            <Form.Control
              type="search"
              placeholder="Cari disini..."
              className="rounded-16px custom-width-search"
              aria-label="Search"
            />
            <FontAwesomeIcon
              className="icon text-muted"
              icon={faMagnifyingGlass}
            />
          </Form>
          <Nav className="ms-auto my-2 my-lg-0">
            <Link
              to={'/login'}
              className="btn-purple rounded-16px d-flex justify-content-center align-items-center btn-login"
            >
              <span>
                <FontAwesomeIcon icon={faArrowRightToBracket} />
              </span>
              Masuk
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
