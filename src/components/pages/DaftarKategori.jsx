import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import DataTable from 'react-data-table-component';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';

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
        <Topbar />
        <div className="row">
          <Sidebar />
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
