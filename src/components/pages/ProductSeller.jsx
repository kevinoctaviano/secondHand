import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css/bundle';
import { useParams } from 'react-router-dom';
import { deleteProduct, getProductUser } from '../../actions/user';
import userPhoto from '../assets/svg/user-photo.svg';
import { useEffect } from 'react';

const mapStateToProps = (state) => {
  return {
    isNull: state.barang.isNull,
    barangUser: state.barang.barangUser,
    message: state.barang.message,
  };
};

function ProductSeller(props) {
  const params = useParams();
  const dispatch = useDispatch();

  const barangID = props.barangUser.filter(
    (barang) => String(barang.idProduct) === params.id
  );

  useEffect(() => {
    dispatch(getProductUser);
  });

  // Mengubah format currency menjadi format rupiah
  let formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  });

  const handleDeleteWishlist = (idProduct) => (e) => {
    e.preventDefault();
    Swal.fire({
      title: 'Hapus product?',
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
        dispatch(deleteProduct(idProduct)).then(() => {
          Swal.fire('Product', 'Berhasil menghapus data product', 'success');
        });
      }
    });
  };
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-8">
            <Swiper
              id="main"
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
            >
              {barangID[0].imageProduct?.map((item) => (
                <SwiperSlide
                  className="d-flex justify-content-center"
                  key={item.imageId}
                >
                  <img
                    src={item?.urlImage}
                    alt={barangID[0].namaProduct}
                    className="w-75 rounded-16px"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="col-lg-4">
            <div className="card-border d-flex justify-content-center mt-3">
              <div
                className="card rounded-16px shadow-sm"
                style={{ width: '336px', height: '266px' }}
              >
                <div className="card-body ps-4 pt-4">
                  <h5 className="card-title mb-3">{barangID[0].namaProduct}</h5>
                  <h6 className="card-subtitle text-muted mb-3">
                    {barangID[0].kategori.namaKategori}
                  </h6>
                  <h4 className="card-text fw-bold mb-3">
                    {formatter.format(barangID[0].hargaProduct)}
                  </h4>
                  <div className="d-grid">
                    <Button
                      className="btn-purple rounded-16px text-center"
                      onClick={handleDeleteWishlist(barangID[0].idProduct)}
                    >
                      Delete Product{' '}
                      <span>
                        <FontAwesomeIcon icon={faTrash} fixedWidth />
                      </span>
                    </Button>
                    <Link
                      className="btn btn-edit rounded-16px mt-3 w-100 d-flex align-items-center justify-content-center"
                      to={`/edit-daftar-jual/${barangID[0].idProduct}`}
                      style={{
                        height: '45px',
                      }}
                    >
                      Edit
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-border d-flex justify-content-center">
              <div
                className="card rounded-16px mt-3"
                style={{ width: '336px' }}
              >
                <div className="card-body ps-4">
                  <div className="row">
                    <div className="col-lg-3">
                      {barangID[0].users.profileFoto === null ? (
                        <img
                          src={userPhoto}
                          alt={barangID[0].users.fullName}
                          className="w-100"
                        />
                      ) : (
                        <img
                          src={barangID[0].users.profileFoto}
                          alt={barangID[0].users.fullName}
                          className="profile-photo"
                        />
                      )}
                    </div>
                    <div className="sller-desk col-lg-9">
                      <h5>{barangID[0].users.fullName}</h5>
                      {barangID[0].users.profileFoto === null ? (
                        <p>Kota</p>
                      ) : (
                        <p>{barangID[0].users.kota}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="d-flex justify-content-center">
              <div className="card rounded-16px shadow-sm w-100 ms-lg-5 mt-4">
                <div className="card-body p-4">
                  <h5 className="card-title mb-3">Deskripsi</h5>
                  <p className="card-text">{barangID[0].deskripsiProduct}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default connect(mapStateToProps, null)(ProductSeller);
