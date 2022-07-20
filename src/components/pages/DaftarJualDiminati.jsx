import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import kosong from '../assets/svg/kosong.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { connect, useDispatch } from 'react-redux';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';

import { deleteWishlist, getAllWishlist } from '../../actions/user';

const mapStateToProps = (state) => {
  return {
    // user
    isNullUser: state.user.isNull,
    user: state.user.user,
    wishlist: state.wishlist.wishlist,
  };
};

const DaftarJualDiminati = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllWishlist);
  }, [dispatch]);
  // Mengubah format currency menjadi format rupiah
  let formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  });

  const handleDeleteWishlist = (idProduct) => (e) => {
    e.preventDefault();
    Swal.fire({
      title: 'Hapus wishlist dari daftar wishlist?',
      icon: 'error',
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
        dispatch(deleteWishlist(idProduct)).then(() => {
          Swal.fire(
            'Wishlist',
            'Berhasil menghapus data dari daftar wishlist',
            'success'
          );
        });
      }
    });
  };
  return (
    <div className="container mt-4">
      <div className="w-75 mx-auto">
        <h4 className="text-dark fw-bold">Daftar Jual Saya</h4>
        <Topbar />
        <div className="row">
          <Sidebar />
          <div className="col-md-8">
            <div className="row">
              {props.wishlist.length !== 0 ? (
                props.wishlist.map((item) => (
                  <div
                    className="col-lg-4 d-flex justify-content-center"
                    key={item.product.idProduct}
                  >
                    <div className="card card-daftar-jual mb-3 shadow-md px-2 pt-2 pb-4">
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
                        {formatter.format(item.product.hargaProduct)}
                      </h5>
                      <button
                        className="btn btn-danger"
                        onClick={handleDeleteWishlist(item.idProduct)}
                      >
                        Add to Wishlist{' '}
                        <span>
                          <FontAwesomeIcon icon={faTrash} fixedWidth />
                        </span>
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="d-flex justify-content-center">
                  <div className="col-lg-4">
                    <img src={kosong} alt="Kosong" />
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

export default connect(mapStateToProps, null)(DaftarJualDiminati);
