/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import Form from 'react-validation/build/form';
import 'swiper/css/bundle';
import { useParams } from 'react-router-dom';
import { getTawaranBuyer, postTawaran } from '../../actions/user';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import userPhoto from '../assets/svg/user-photo.svg';

const mapStateToProps = (state) => {
  return {
    isNull: state.barang.isNull,
    barangKategoriUser: state.barang.barangKategoriUser,
    tawaranBuyer: state.tawaran.tawaranBuyer,
    message: state.barang.message,
  };
};

const ProductBuyer = (props) => {
  const params = useParams();
  const dispatch = useDispatch();

  const [statusTawaran, setStatusTawaran] = useState('');

  const barangID = props.barangKategoriUser.filter(
    (barang) => String(barang.idProduct) === params.id
  );

  useEffect(() => {
    dispatch(getTawaranBuyer);
    const handleStatus = () => {
      if (props.tawaranBuyer !== []) {
        const statusTawaran = props.tawaranBuyer.filter(
          (tawaran) => String(tawaran.product.idProduct) === params.id
        );
        if (statusTawaran.length === 0) {
          setStatusTawaran('');
        } else {
          setStatusTawaran(statusTawaran[0].statusTawaran);
        }
      }
    };
    handleStatus();
  }, [dispatch, params, props]);

  // Mengubah format currency menjadi format rupiah
  let formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  });

  const [show, setShow] = useState(false);
  const [hargaTawar, setHargaTawar] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const changeHargaTawar = (e) => {
    const harga = e.target.value;
    setHargaTawar(harga);
  };

  const handleHargaTawar = (e) => {
    e.preventDefault();
    const idProduct = barangID[0].idProduct;
    const harga = hargaTawar;
    const status = 'WAITING';
    const postTawar = dispatch(postTawaran(idProduct, harga, status));
    toast.promise(postTawar, {
      pending: 'Sedang menambahkan data tawaran...',
      success: `Berhasil menambahkan data tawaran!`,
      error: 'Promise rejected 🤯',
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
                style={{ width: '336px', height: '204px' }}
              >
                <div className="card-body ps-4 pt-4">
                  <h5 className="card-title mb-3">{barangID[0].namaProduct}</h5>
                  <h6 className="card-subtitle text-muted mb-3">
                    {barangID[0].kategori.namaKategori}
                  </h6>
                  <h4 className="card-text fw-bold mb-3">
                    {formatter.format(barangID[0].hargaProduct)}
                  </h4>
                  {statusTawaran === 'WAITING' ? (
                    <div className="d-grid gap-4">
                      <Button
                        type="submit"
                        className="btn-purple rounded-16px"
                        disabled
                      >
                        Menunggu Konfirmasi Seller
                      </Button>
                    </div>
                  ) : (
                    <div className="d-grid">
                      <Button
                        className="btn-purple rounded-16px text-center"
                        onClick={handleShow}
                      >
                        Saya tertarik dan ingin nego
                      </Button>
                    </div>
                  )}
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
      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="px-5">
          <h5 className="fw-bold">Masukkan Harga Tawarmu</h5>
          <p className="label-14px text-muted">
            Harga tawaranmu akan diketahui penual, jika penjual cocok kamu akan
            segera dihubungi penjual.
          </p>
          <div className="card rounded-16px mt-3" style={{ height: '120px' }}>
            <div className="card-body">
              <div className="row d-flex align-items-center">
                <div className="col-lg-3">
                  <img
                    src={barangID[0].imageProduct[0]?.urlImage}
                    className="profile-photo"
                    alt="Buyer"
                  />
                </div>
                <div className="col-lg-9">
                  <h5 className="fw-bold">{barangID[0].namaProduct}</h5>
                  <h6 className="fw-bold">
                    {formatter.format(barangID[0].hargaProduct)}
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-3 mt-3">
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
            <Form onSubmit={handleHargaTawar}>
              <label htmlFor="" className="form-label">
                Harga Tawar
              </label>
              <input
                type="text"
                className="form-control rounded-16px"
                placeholder="Rp 0,00"
                onChange={changeHargaTawar}
              />

              <div className="d-grid gap-4">
                <Button type="submit" className="btn-purple rounded-16px">
                  Kirim
                </Button>
              </div>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default connect(mapStateToProps, null)(ProductBuyer);
