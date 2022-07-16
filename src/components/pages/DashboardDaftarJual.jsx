import React from 'react';
import {
  faAngleRight,
  faBoxOpen,
  faDollarSign,
  faHeart,
  faSearch,
  faUserCheck,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import userPhoto from '../assets/svg/user-photo.svg';
import tambahProduk from '../assets/svg/tambah-produk.svg';
import empty from '../assets/svg/empty.svg';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    // barang
    isNull: state.barang.isNull,
    barang: state.barang.barang,
    message: state.barang.message,
    // user
    isNullUser: state.user.isNull,
    user: state.user.user,
  };
};

const DashboardDaftarJual = (props) => {
  // Mengubah format currency menjadi format rupiah
  let formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  });
  // const user = JSON.parse(localStorage.getItem('user'));
  return (
    <div className="container mt-4">
      <div className="w-75 mx-auto">
        <h4 className="text-dark fw-bold">Daftar Jual Saya</h4>

        <div className="border my-3 px-3 custom-border-auth">
          <div className="row">
            <div className="col-md-1 pt-3">
              {props.user.profileFoto === null ? (
                <img src={userPhoto} alt="" className="w-100" />
              ) : (
                <img src={props.user.profileFoto} alt="" className="w-100" />
              )}
            </div>

            <div className="col-md-9 pt-3">
              <p className="text-dark font-weight-bold custom-font-1">
                {props.user.fullName}
              </p>
              {props.user.kota === null ? (
                <p className="text-muted custom-font-5 custom-space-top">
                  Kota
                </p>
              ) : (
                <p className="text-muted custom-font-5 custom-space-top">
                  {props.user.kota}
                </p>
              )}
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
                className="d-flex justify-content-between text-decoration-none custom-font-auth"
                to="/daftar-jual"
              >
                <div className="row align-items-center">
                  <div className="col-md-12">
                    <span className="mr-2">
                      <FontAwesomeIcon
                        icon={faBoxOpen}
                        fixedWidth
                        className="pe-3"
                      />
                    </span>
                    <span className="fw-bold">Semua Produk</span>
                  </div>
                </div>
                <span>
                  <FontAwesomeIcon icon={faAngleRight} />
                </span>
              </Link>
              <hr className="custom-font-auth" />
              <Link
                className="d-flex justify-content-between text-decoration-none"
                to="/diminati"
              >
                <div className="row align-items-center">
                  <div className="col-md-12">
                    <span className="mr-2 text-muted">
                      <FontAwesomeIcon
                        icon={faHeart}
                        fixedWidth
                        className="pe-3"
                      />
                    </span>
                    <span className="text-muted">Diminati</span>
                  </div>
                </div>
                <span className="text-muted">
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
              <hr className="custom-font-auth" />
              <Link
                className="d-flex justify-content-between text-decoration-none"
                to={'/kategori'}
              >
                <div className="row align-items-center">
                  <div className="col-md-12">
                    <span className="mr-2 text-muted">
                      <FontAwesomeIcon
                        icon={faSearch}
                        fixedWidth
                        className="pe-3"
                      />
                    </span>
                    <span className="text-dark">Daftar Kategori</span>
                  </div>
                </div>
                <span className="text-muted">
                  <FontAwesomeIcon icon={faAngleRight} />
                </span>
              </Link>
              <hr className="custom-font-auth" />
              <Link
                className="d-flex justify-content-between text-decoration-none"
                to={'/daftar-penawar'}
              >
                <div className="row align-items-center">
                  <div className="col-md-12">
                    <span className="mr-2 text-muted">
                      <FontAwesomeIcon
                        icon={faUserCheck}
                        fixedWidth
                        className="pe-3"
                      />
                    </span>
                    <span className="text-dark">Barang ditawar</span>
                  </div>
                </div>
                <span className="text-muted">
                  <FontAwesomeIcon icon={faAngleRight} />
                </span>
              </Link>
            </div>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-lg-4 d-flex justify-content-center">
                <Link to={'/info-product-add'}>
                  <img
                    src={tambahProduk}
                    className="icon-add-product-daftarjual"
                    alt="Add"
                  />
                </Link>
              </div>
              {!props.barang ? (
                <>
                  <h1 className="text-dark display-5 text-center">
                    Belum Ada Data
                  </h1>
                  <img
                    src={empty}
                    alt="kosong"
                    className="mt-4 mx-auto d-block"
                    style={{ width: '350px' }}
                  />
                </>
              ) : (
                props.barang.map((item, index = 1) => (
                  <div
                    className="col-lg-4 d-flex justify-content-center"
                    key={index}
                  >
                    <div className="card card-daftar-jual mb-3 shadow-md px-2 pt-2 pb-4">
                      <img
                        src={item.imageProduct[0].urlImage}
                        className="card-home"
                        alt=""
                      />
                      <h5 className="mt-1 text-sm font-normal">
                        {item.namaProduct}
                      </h5>
                      <h5 className="mt-1 text-10px font-normal text-muted">
                        {item.kategori.namaKategori}
                      </h5>
                      <h5 className="mt-1 text-sm font-normal">
                        {formatter.format(item.hargaProduct)}
                      </h5>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, null)(DashboardDaftarJual);
