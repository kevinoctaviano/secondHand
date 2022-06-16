import React from 'react';
import { Navbar, Container, Nav, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import fi_bell from '../../assets/svg/fi_bell.svg';
import fi_user from '../../assets/svg/fi_user.svg';
import fi_list from '../../assets/svg/fi_list.svg';

export default function NavbarSellerBuyerProduct() {
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
              className="me-2 rounded-16px"
              aria-label="Search"
              style={{ width: '444px' }}
            />
            <FontAwesomeIcon
              className="icon text-muted"
              icon={faMagnifyingGlass}
            />
          </Form>
          <Nav className="ms-auto my-2 my-lg-0">
            <Nav.Link href="#action1">
              <img src={fi_list} alt="List" />
            </Nav.Link>
            <Nav.Link href="#action1">
              <img src={fi_bell} alt="Bell" />
            </Nav.Link>
            <Nav.Link href="#action1">
              <img src={fi_user} alt="User" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
