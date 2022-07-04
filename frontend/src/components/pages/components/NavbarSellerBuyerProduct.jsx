import React from 'react';
import { Navbar, Container, Nav, Form, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import fi_bell from '../../assets/svg/fi_bell.svg';
import fi_user from '../../assets/svg/fi_user.svg';
import fi_list from '../../assets/svg/fi_list.svg';
import jam from '../../assets/svg/jam.svg';

export default function NavbarSellerBuyerProduct() {
  return (
    <Navbar bg="light shadow-sm" expand="lg">
      <Container>
        <Navbar.Brand href="/">
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
            <Nav.Link href="#action1">
              <img src={fi_list} alt="List" />
            </Nav.Link>
            <NavDropdown
              title={<img src={fi_bell} alt="Bell" />}
              id="basic-nav-dropdown"
              align="end"
            >
              <NavDropdown.Item href="/info-penawar">
                <div className="row">
                  <div className="col-lg-2">
                    <img
                      src={jam}
                      alt="Jam"
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                      }}
                    />
                  </div>
                  <div className="col-lg-7">
                    <p className="text-muted m-0 label-10px">
                      Penawaran Produk
                    </p>
                    <h6>Jam Tangan Casio</h6>
                    <h6>Rp 250.000</h6>
                    <h6>Ditawar Rp 250.000</h6>
                  </div>
                  <div className="col-lg-3">
                    <p className="text-muted m-0 label-10px">20 Apr, 14:04</p>
                  </div>
                </div>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                <div className="row">
                  <div className="col-lg-2">
                    <img
                      src={jam}
                      alt="Jam"
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                      }}
                    />
                  </div>
                  <div className="col-lg-7">
                    <p className="text-muted m-0 label-10px">
                      Berhasil diterbitkan
                    </p>
                    <h6>Jam Tangan Casio</h6>
                    <h6>Rp 250.000</h6>
                  </div>
                  <div className="col-lg-3">
                    <p className="text-muted m-0 label-10px">19 Apr, 12:00</p>
                  </div>
                </div>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action1">
              <img src={fi_user} alt="User" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
