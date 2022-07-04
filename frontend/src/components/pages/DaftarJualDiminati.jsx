import {
  faAngleRight,
  faBoxOpen,
  faDollarSign,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import React from 'react';
import userPhoto from '../assets/svg/user-photo.svg';
import kosong from '../assets/svg/kosong.svg';

export default function DaftarJualDiminati() {
  return (
    <div className="container mt-4">
      <div className="w-75 mx-auto">
        <h4 className="text-dark fw-bold">Daftar Jual Saya</h4>

        <div className="border my-3 px-3  custom-border-auth">
          <div className="row">
            <div className="col-md-1 pt-3">
              <img src={userPhoto} alt="" className="w-100" />
            </div>

            <div className="col-md-9 pt-3">
              <p className="text-dark font-weight-bold custom-font-1">
                Nama Penjual
              </p>
              <p className="text-muted custom-font-5 custom-space-top">Kota</p>
            </div>

            <div className="col-md-2 d-flex justify-content-end">
              <div className="d-flex align-self-center">
                <Link
                  to={'/info-profile'}
                  className="edit-daftar-jual btn btn-ungu fw-bold d-flex align-items-center"
                >
                  Edit
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="w-100 border px-4 py-4 custom-border-auth">
              <h5 className="fw-bold mb-3">Kategori</h5>

              <Link
                className="d-flex justify-content-between text-decoration-none"
                to="/daftar-jual"
              >
                <div className="row align-items-center">
                  <div className="col-md-12">
                    <span className="mr-2 text-muted">
                      <FontAwesomeIcon
                        icon={faBoxOpen}
                        fixedWidth
                        className="pe-3"
                      />
                    </span>
                    <span className="text-muted">Semua Produk</span>
                  </div>
                </div>
                <span className="text-muted">
                  <FontAwesomeIcon icon={faAngleRight} />
                </span>
              </Link>
              <hr />

              <Link
                className="d-flex justify-content-between text-decoration-none custom-font-auth"
                to="/diminati"
              >
                <div className="row align-items-center">
                  <div className="col-md-12">
                    <span className="mr-2">
                      <FontAwesomeIcon
                        icon={faHeart}
                        fixedWidth
                        className="pe-3"
                      />
                    </span>
                    <span className="fw-bold">Diminati</span>
                  </div>
                </div>
                <span>
                  <FontAwesomeIcon icon={faAngleRight} />
                </span>
              </Link>
              <hr className="custom-font-auth" />

              <Link
                className="d-flex justify-content-between text-decoration-none"
                to={'/terjual'}
              >
                <div className="row align-items-center">
                  <div className="col-md-12">
                    <span className="mr-2 text-muted">
                      <FontAwesomeIcon
                        icon={faDollarSign}
                        fixedWidth
                        className="pe-3"
                      />
                    </span>
                    <span className="text-dark">Terjual</span>
                  </div>
                </div>
                <span className="text-muted">
                  <FontAwesomeIcon icon={faAngleRight} />
                </span>
              </Link>
            </div>
          </div>

          <div className="col-md-8 d-flex justify-content-center">
            <div className="row">
              <div className="col-md-4">
                <img src={kosong} alt="Kosong" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
