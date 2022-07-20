import React, { useState, useEffect } from 'react';
import { useDispatch, connect, useSelector } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css/bundle';
import { useParams } from 'react-router-dom';
import { getProductByID } from '../../actions/user';

const mapStateToProps = (state) => {
  return {
    isNull: state.barang.isNull,
    barangKategori: state.barang.barangKategori,
    message: state.barang.message,
  };
};

const ProductBuyer = (props) => {
  const params = useParams();
  const dispatch = useDispatch();
  // const { barangID } = useSelector((state) => state.barang);
  useEffect(() => {
    dispatch(getProductByID(params.id));
  }, [dispatch, params]);

  // Mengubah format currency menjadi format rupiah
  let formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  });

  // useEffect(() => {
  //   dispatch(getProductByID(params.id));
  // }, [params]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
              {/* {barangID.imageProduct?.map((item) => ( */}
              {props.barangID.imageProduct?.map((item) => (
                <SwiperSlide className="d-flex justify-content-center">
                  <img
                    src={item?.urlImage}
                    alt={props.barangID.namaProduct}
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
                  <h5 className="card-title mb-3">
                    {props.barangID.namaProduct}
                  </h5>
                  <h6 className="card-subtitle text-muted mb-3">
                    {props.barangID.kategori.namaKategori}
                  </h6>
                  <h4 className="card-text fw-bold mb-3">
                    {formatter.format(props.barangID.hargaProduct)}
                  </h4>
                  <div className="d-grid">
                    <Button
                      className="btn-purple rounded-16px text-center"
                      onClick={handleShow}
                    >
                      Saya tertarik dan ingin nego
                    </Button>
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
                      <img
                        src={props.barangID.users.profileFoto}
                        alt="Buyer"
                        className="profile-photo"
                      />
                    </div>
                    <div className="sller-desk col-lg-9">
                      <h5>{props.barangID.users.fullName}</h5>
                      <p>{props.barangID.users.kota}</p>
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
                  <p className="card-text">{props.barangID.deskripsiProduct}</p>
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
                    src={props.barangID.imageProduct[0]?.urlImage}
                    className="profile-photo"
                    alt="Buyer"
                  />
                </div>
                <div className="col-lg-9">
                  <h5 className="fw-bold">{props.barangID.namaProduct}</h5>
                  <h6 className="fw-bold">
                    {formatter.format(props.barangID.hargaProduct)}
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="" className="form-label">
              Harga Tawar
            </label>
            <input
              type="email"
              className="form-control rounded-16px"
              placeholder="Rp 0,00"
            />
          </div>
          <div className="d-grid gap-4">
            <Button className="btn-purple rounded-16px" onClick={handleClose}>
              Kirim
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default connect(mapStateToProps, null)(ProductBuyer);
// export default ProductBuyer;
