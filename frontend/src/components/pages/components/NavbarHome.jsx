import React from "react";
import { Navbar, Container, Nav, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToBracket,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

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
              className="me-2 rounded-16px"
              aria-label="Search"
              style={{ width: "444px" }}
            />
            <FontAwesomeIcon
              className="icon text-muted"
              icon={faMagnifyingGlass}
            />
          </Form>
          <Nav className="ms-auto my-2 my-lg-0">
            <Nav.Link
              href="#action1"
              className="btn-purple rounded-16px d-flex justify-content-center align-items-center"
              style={{ width: "105px", height: "48px", fontSize: "15px" }}
            >
              <span>
                <FontAwesomeIcon icon={faArrowRightToBracket} />
              </span>
              Masuk
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
