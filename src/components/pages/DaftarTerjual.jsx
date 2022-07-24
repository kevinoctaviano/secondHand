import React from 'react';
import kosong from '../assets/svg/kosong.svg';
import { connect, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import { useEffect } from 'react';
import { getTawaranSeller } from '../../actions/user';

const mapStateToProps = (state) => {
  return {
    // tawaran seller
    isNull: state.tawaran.isNull,
    tawaran: state.tawaran.tawaran,
    message: state.tawaran.message,
  };
};

const DaftarTerjual = (props) => {
  const dispatch = useDispatch();

  const tawaranAccepted = props.tawaran.filter(
    (tawaran) =>
      tawaran.statusTawaran === 'ACCEPTED' ||
      tawaran.statusTawaran === 'REJECTED'
  );

  // console.log(tawaranWaiting);

  useEffect(() => {
    dispatch(getTawaranSeller);
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
              {tawaranAccepted.length !== 0 ? (
                tawaranAccepted.map((item) =>
                  item.statusTawaran === 'ACCEPTED' ? (
                    <div
                      className="col-lg-4 d-flex justify-content-center"
                      key={item.idTawaran}
                    >
                      <div className="card card-daftar-diminati mb-3 shadow-md px-2 pt-2 pb-4 icon-add-product-daftarjual">
                        <div className="d-flex justify-content-center">
                          <img
                            src={item.product.imageProduct[0]?.urlImage}
                            className="card-home"
                            style={{ height: '100px' }}
                            alt={item.product.namaProduct}
                          />
                        </div>
                        <h5 className="mt-1 text-sm font-normal">
                          {item.product.namaProduct}
                        </h5>
                        <h5 className="mt-1 text-10px font-normal text-muted">
                          {item.product.kategori.namaKategori}
                        </h5>
                        <h5 className="mt-1 text-sm font-normal">
                          {formatter.format(item.hargaTawar)}
                        </h5>
                        <button className="btn btn-success">
                          {item.statusTawaran}{' '}
                          <span>
                            <FontAwesomeIcon icon={faCheck} fixedWidth />
                          </span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div
                      className="col-lg-4 d-flex justify-content-center"
                      key={item.idTawaran}
                    >
                      <div className="card card-daftar-diminati mb-3 shadow-md px-2 pt-2 pb-4 icon-add-product-daftarjual">
                        <div className="d-flex justify-content-center">
                          <img
                            src={item.product.imageProduct[0]?.urlImage}
                            className="card-home"
                            style={{ height: '100px' }}
                            alt={item.product.namaProduct}
                          />
                        </div>
                        <h5 className="mt-1 text-sm font-normal">
                          {item.product.namaProduct}
                        </h5>
                        <h5 className="mt-1 text-10px font-normal text-muted">
                          {item.product.kategori.namaKategori}
                        </h5>
                        <h5 className="mt-1 text-sm font-normal">
                          {formatter.format(item.hargaTawar)}
                        </h5>
                        <button className="btn btn-danger">
                          {item.statusTawaran}{' '}
                          <span>
                            <FontAwesomeIcon icon={faTimes} fixedWidth />
                          </span>
                        </button>
                      </div>
                    </div>
                  )
                )
              ) : (
                <div className="d-flex justify-content-center">
                  <div className="col-lg-4">
                    <img
                      src={kosong}
                      className="icon-add-product-daftarjual"
                      alt="Kosong"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, null)(DaftarTerjual);
