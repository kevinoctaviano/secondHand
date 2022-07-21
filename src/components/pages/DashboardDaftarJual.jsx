import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import tambahProduk from '../assets/svg/tambah-produk.svg';
import empty from '../assets/svg/empty.svg';
import { getProductUser } from '../../actions/user';
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';

import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';

const mapStateToProps = (state) => {
  return {
    // barang
    isNull: state.barang.isNull,
    barang: state.barang.barangUser,
    message: state.barang.message,
    // user
    isNullUser: state.user.isNull,
    user: state.user.user,
  };
};

const DashboardDaftarJual = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductUser());
    // console.log(props.barang);
  }, [dispatch]);

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
        <Topbar />
        <div className="row">
          <Sidebar />
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
                      <div className="d-flex justify-content-center">
                        <img
                          src={item.imageProduct[0]?.urlImage}
                          className="card-home"
                          style={{ height: '100px' }}
                          alt={item.namaProduct}
                        />
                      </div>
                      <h5 className="mt-1 text-sm font-normal">
                        {item.namaProduct}
                      </h5>
                      <h5 className="mt-1 text-10px font-normal text-muted">
                        {item.kategori.namaKategori}
                      </h5>
                      <h5 className="mt-1 text-sm font-normal">
                        {formatter.format(item.hargaProduct)}
                      </h5>
                      <Link
                        className="btn btn-success"
                        to={`/product-seller/${item.idProduct}`}
                      >
                        Edit Product{' '}
                        <span>
                          <FontAwesomeIcon icon={faEdit} fixedWidth />
                        </span>
                      </Link>
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
