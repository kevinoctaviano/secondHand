import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import DataTable from 'react-data-table-component';
import userPhoto from '../assets/svg/user-photo.svg';
import {
  faAngleRight,
  faBoxOpen,
  faDollarSign,
  faHeart,
  faSearch,
  faPencil,
  faTrash,
  faUserCheck,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';

import { getAllKategori, deleteKategori } from '../../actions/user';

const mapStateToProps = (state) => {
  return {
    // kategori
    isNull: state.kategori.isNull,
    kategori: state.kategori.kategori,
    message: state.kategori.message,
    // user
    isNullUser: state.user.isNull,
    user: state.user.user,
  };
};

const DaftarKategori = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllKategori);
  }, [dispatch]);

  const listCar = [
    {
      name: 'ID',
      cell: (row) => row.idKategori,
    },
    {
      name: 'Category Name',
      cell: (row) => row.namaKategori,
    },
    {
      name: 'Action',
      selector: (row) => (
        <div>
          <Link
            className="btn btn-outline-info me-3"
            to={`/edit-kategori/${row.idKategori}`}
          >
            <FontAwesomeIcon icon={faPencil} fixedWidth className="pe-1" />
            Edit
          </Link>
          <Link
            className="btn btn-outline-danger"
            to={'/kategori'}
            onClick={handleDeleteButton(`${row.idKategori}`)}
          >
            <FontAwesomeIcon icon={faTrash} fixedWidth className="pe-1" />
            Delete
          </Link>
        </div>
      ),
    },
  ];

  const handleDeleteButton = (idKategori) => (e) => {
    e.preventDefault();

    Swal.fire({
      title: 'Apakah kamu yakin untuk menghapus data ini?',
      text: 'Kamu tidak akan bisa memulihkan data ini lagi!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya, hapus!',
      showClass: {
        popup: 'animate__animated animate__fadeInDown',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteKategori(idKategori)).then(() => {
          Swal.fire('Terhapus!', `${props.message}`, 'success');
        });
      }
    });
  };

  // const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="container mt-4">
      <div className="w-75 mx-auto">
        <h4 className="text-dark fw-bold">Daftar Jual Saya</h4>

        <div className="border my-3 px-3  custom-border-auth">
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
                className="d-flex justify-content-between text-decoration-none custom-font-auth"
                to={'/kategori'}
              >
                <div className="row align-items-center">
                  <div className="col-md-12">
                    <span className="mr-2">
                      <FontAwesomeIcon
                        icon={faSearch}
                        fixedWidth
                        className="pe-3"
                      />
                    </span>
                    <span className="fw-bold">Daftar Kategori</span>
                  </div>
                </div>
                <span>
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
                    <span className="text-muted">Barang ditawar</span>
                  </div>
                </div>
                <span className="text-muted">
                  <FontAwesomeIcon icon={faAngleRight} />
                </span>
              </Link>
            </div>
          </div>

          <div className="col-md-8">
            <div className="card shadow mb-4">
              <div className="card-header py-3 row">
                <div className="col-lg-6 d-flex align-self-center">
                  <h6 className="m-0 fw-bold custom-font-auth ">
                    Daftar Kategori
                  </h6>
                </div>
                <div className="col-lg-6 d-flex justify-content-end">
                  <Link
                    className="btn-tambah-kategori btn btn-ungu fw-bold d-flex align-items-center"
                    to={'/add-kategori'}
                  >
                    Tambah Kategori
                  </Link>
                </div>
              </div>
              <div className="card-body">
                {props.isNull ? (
                  <div className="d-flex justify-content-center">
                    <span className="spinner-border spinner-border-lg"></span>
                  </div>
                ) : (
                  <div className="table-responsive">
                    <DataTable
                      pagination
                      highlightOnHover
                      columns={listCar}
                      data={props.kategori}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, null)(DaftarKategori);
