import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Navbar, Container, Nav, Form, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faArrowRightToBracket,
  faMagnifyingGlass,
  faUserAstronaut,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import fi_bell from '../../assets/svg/fi_bell.svg';
import fi_user from '../../assets/svg/fi_user.svg';
import fi_list from '../../assets/svg/fi_list.svg';
import brand from '../../assets/svg/brand.svg';

import EventBus from '../../../common/EventBus';
import { clearMessage } from '../../../actions/message';
import {
  getDataBySearch,
  getDataProductAllUser,
  getNotifikasi,
} from '../../../actions/user';
import { history } from '../../../helpers/history';
import { logout } from '../../../actions/auth';
import { useState } from 'react';

const mapStateToProps = (state) => {
  return {
    // user
    isNull: state.user.isNull,
    notifikasi: state.user.notifikasi,
    message: state.user.message,
  };
};

function NavbarHome(props) {
  const { user: currentUser } = useSelector((state) => state.auth);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [search, setSearch] = useState('');
  const [kategori, setKategori] = useState('');
  const dispatch = useDispatch();

  const notifLimit = props.notifikasi.slice(0, 5);

  // Mengubah format currency menjadi format rupiah
  let formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  });

  let formatDate = (date) => {
    const monthMap = [
      'Jan',
      'Feb',
      'Mar',
      'Apr.',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sept',
      'Oct',
      'Nov',
      'Dec',
    ];
    const tanggal = new Date(date);
    const hari = tanggal.getDate();
    const bulan = tanggal.getMonth();
    const jam = tanggal.getHours();
    const menit = tanggal.getMinutes();

    return `${hari} ${monthMap[bulan]}, ${jam}.${menit}`;
  };

  const navigate = useHistory();
  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
    if (isLoggedIn) {
      dispatch(getDataProductAllUser(kategori, search));
    }
    dispatch(getDataBySearch(search));
  }, [dispatch, search, kategori, isLoggedIn]);

  const logOut = useCallback(() => {
    dispatch(logout());
    navigate.push('/');
  }, [dispatch, navigate]);

  useEffect(() => {
    EventBus.on('logout', () => {
      logOut();
    });

    return () => {
      EventBus.remove('logout');
    };
  }, [logOut]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const [timer, setTimer] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const getDataNotifikasi = () => {
      dispatch(getNotifikasi);
      clearTimeout(timer);
      setTimer(setTimeout(getDataNotifikasi, 2000));
    };
    if (!isMounted) {
      getDataNotifikasi();
      setIsMounted(true);
    }
  }, [isMounted, dispatch, timer]);

  return (
    <Navbar bg="light shadow-sm" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src={brand} alt="brand" className="custom-logo-navbar" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex wrapper">
            <Form.Control
              type="search"
              placeholder="Cari disini..."
              className="rounded-16px custom-width-search"
              aria-label="Search"
              onChange={handleSearch}
            />
            <FontAwesomeIcon
              className="icon text-muted"
              icon={faMagnifyingGlass}
            />
          </Form>
          {!currentUser ? (
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
          ) : (
            <Nav className="ms-auto my-2 my-lg-0">
              <Nav.Link href="/daftar-jual">
                <img src={fi_list} alt="List" />
              </Nav.Link>
              <NavDropdown
                title={<img src={fi_bell} alt="Bell" />}
                id="basic-nav-dropdown"
                align="end"
              >
                {notifLimit.length === 0 ? (
                  <NavDropdown.Item href={`#`}>
                    <h6>Belum ada notifikasi...</h6>
                  </NavDropdown.Item>
                ) : (
                  notifLimit.map((item, index = 1) => (
                    <div key={index}>
                      <NavDropdown.Item
                        href={`/info-penawar/${item.tawaran.idTawaran}`}
                      >
                        <div className="row">
                          <div className="col-lg-2">
                            <img
                              src={
                                item.tawaran.product.imageProduct[0]?.urlImage
                              }
                              alt={item.tawaran.product.namaProduct}
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
                            <h6>{item.tawaran.product.namaProduct}</h6>
                            <h6>
                              <del>
                                {formatter.format(
                                  item.tawaran.product.hargaProduct
                                )}
                              </del>
                            </h6>
                            <h6>
                              Ditawar{' '}
                              {formatter.format(item.tawaran.hargaTawar)}
                            </h6>
                          </div>
                          <div className="col-lg-3">
                            <p className="text-muted m-0 label-10px">
                              {formatDate(item.creaDateTime)}
                            </p>
                          </div>
                        </div>
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                    </div>
                  ))
                )}
              </NavDropdown>
              <NavDropdown
                className="dropdown-menu-profile"
                title={<img src={fi_user} alt="User" />}
                id="basic-nav-dropdown"
                align="end"
              >
                <NavDropdown.Item href="/info-profile">
                  <span className="me-3">
                    <FontAwesomeIcon icon={faUserAstronaut} />
                  </span>
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logOut}>
                  <span className="me-3">
                    <FontAwesomeIcon icon={faSignOutAlt} />
                  </span>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default connect(mapStateToProps, null)(NavbarHome);
