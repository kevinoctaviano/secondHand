import {
  faAngleRight,
  faBoxOpen,
  faDollarSign,
  faHeart,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import React from 'react';
import userPhoto from '../assets/svg/user-photo.svg';
// import kosong from '../assets/svg/kosong.svg';

export default function DaftarKategori() {
  let carRental = [];

  for (let i = 1; i <= 50; i++) {
    let obj = {};
    obj['id'] = [i];
    obj['name'] = 'Name';
    obj['category'] = 'Category Name';

    carRental.push(obj);
  }

  const listCar = [
    {
      name: 'No',
      selector: (row) => row.id,
    },
    {
      name: 'ID',
      selector: (row) => row.name,
    },
    {
      name: 'Category Name',
      selector: (row) => row.category,
      grow: 3,
    },
    {
      name: 'Action',
      selector: (row) => row.category,
      grow: 3,
    },
  ];

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
            </div>
          </div>

          <div className="col-md-8 d-flex justify-content-center">
            <div className="card shadow mb-4 w-100">
              <div className="card-header py-3">
                <h6 className="m-0 fw-bold custom-font-auth">
                  Daftar Kategori
                </h6>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <DataTable
                    pagination
                    highlightOnHover
                    columns={listCar}
                    data={carRental}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
