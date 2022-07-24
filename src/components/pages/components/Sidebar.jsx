import React from 'react';
import {
  faAngleRight,
  faBoxOpen,
  faDollarSign,
  faHeart,
  faSearch,
  faUserCheck,
  faBoxArchive,

  faListCheck,

} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="col-md-4">
      <div className="w-100 border px-4 py-4 custom-border-auth">
        <h5 className="fw-bold mb-3">Kategori</h5>
        <NavLink
          className="d-flex justify-content-between sidebar-custom"
          to={'/daftar-jual'}
          activeClassName="active"
        >
          <span>
            <FontAwesomeIcon icon={faBoxOpen} fixedWidth />
          </span>
          Semua Produk
          <span>
            <FontAwesomeIcon icon={faAngleRight} />
          </span>
        </NavLink>
        <hr className="custom-font-auth" />
        <NavLink
          className="d-flex justify-content-between sidebar-custom"
          to={'/diminati'}
          activeClassName="active"
        >
          <span>
            <FontAwesomeIcon icon={faHeart} fixedWidth />
          </span>
          Diminati
          <span>
            <FontAwesomeIcon icon={faAngleRight} />
          </span>
        </NavLink>
        <hr className="custom-font-auth" />
        <NavLink
          className="d-flex justify-content-between sidebar-custom"
          to={'/terjual'}
          activeClassName="active"
        >
          <span>
            <FontAwesomeIcon icon={faDollarSign} fixedWidth />
          </span>
          Terjual
          <span>
            <FontAwesomeIcon icon={faAngleRight} />
          </span>
        </NavLink>
        <hr className="custom-font-auth" />
        <NavLink
          className="d-flex justify-content-between sidebar-custom"
          to={'/kategori'}
          activeClassName="active"
        >
          <span>
            <FontAwesomeIcon icon={faSearch} fixedWidth />
          </span>
          Daftar Kategori
          <span>
            <FontAwesomeIcon icon={faAngleRight} />
          </span>
        </NavLink>
        <hr className="custom-font-auth" />
        <NavLink
          className="d-flex justify-content-between sidebar-custom"
          to={'/daftar-penawar'}
          activeClassName="active"
        >
          <span>
            <FontAwesomeIcon icon={faUserCheck} fixedWidth />
          </span>
          Barang ditawar
          <span>
            <FontAwesomeIcon icon={faAngleRight} />
          </span>
        </NavLink>
        <hr className="custom-font-auth" />
        <NavLink
          className="d-flex justify-content-between sidebar-custom"
          to={'/tawaran-saya'}
          activeClassName="active"
        >
          <span>

            <FontAwesomeIcon icon={faListCheck} />
          </span>
          Daftar Tawaran Saya
          <span>
            <FontAwesomeIcon icon={faAngleRight} />
          </span>
        </NavLink>
        <hr className="custom-font-auth" />
        <NavLink
          className="d-flex justify-content-between sidebar-custom"
          to={'/produk-dibuat'}
          activeClassName="active"
        >
          <span>
            <FontAwesomeIcon icon={faBoxArchive} fixedWidth />
          </span>
          Daftar Produk Dibuat
          <span>
            <FontAwesomeIcon icon={faAngleRight} />
          </span>
        </NavLink>
        <hr className="custom-font-auth" />
        <NavLink
          className="d-flex justify-content-between sidebar-custom"
          to={'/produk-publish'}
          activeClassName="active"
        >
          <span>
            <FontAwesomeIcon icon={faUserCheck} fixedWidth />
          </span>
          Daftar Produk Publish
          <span>
            <FontAwesomeIcon icon={faAngleRight} />
          </span>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
