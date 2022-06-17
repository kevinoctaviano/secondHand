import { Button, Modal } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css/bundle';
import React, { useState } from 'react';
import jam from '../assets/svg/jam.svg';
import jamKecil from '../assets/svg/jam-kecil.svg';
import userPhoto from '../assets/svg/user-photo.svg';

export default function ProductBuyer() {
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
              <SwiperSlide className="d-flex justify-content-center">
                <img src={jam} alt="Product" className="w-75 rounded-16px" />
              </SwiperSlide>
              <SwiperSlide className="d-flex justify-content-center">
                <img src={jam} alt="Product" className="w-75 rounded-16px" />
              </SwiperSlide>
              <SwiperSlide className="d-flex justify-content-center">
                <img src={jam} alt="Product" className="w-75 rounded-16px" />
              </SwiperSlide>
              <SwiperSlide className="d-flex justify-content-center">
                <img src={jam} alt="Product" className="w-75 rounded-16px" />
              </SwiperSlide>
            </Swiper>
            <div className="d-flex justify-content-center">
              <div className="card rounded-16px shadow-sm w-100 ms-5 mt-4">
                <div className="card-body p-4">
                  <h5 className="card-title mb-3">Deskripsi</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Totam doloremque consectetur omnis maxime, nisi alias
                    doloribus minus dignissimos quibusdam iure iste sunt
                    assumenda laborum. Aliquam, id autem sit dicta incidunt ipsa
                    assumenda? Temporibus deleniti sed cum suscipit totam a quas
                    omnis maiores laborum, nesciunt magnam similique cupiditate
                    alias pariatur quam consequatur porro ipsum reprehenderit,
                    ex iusto dolore velit. Consectetur, officiis?
                  </p>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Totam doloremque consectetur omnis maxime, nisi alias
                    doloribus minus dignissimos quibusdam iure iste sunt
                    assumenda laborum. Aliquam, id autem sit dicta incidunt ipsa
                    assumenda? Temporibus deleniti sed cum suscipit totam a quas
                    omnis maiores laborum, nesciunt magnam similique cupiditate
                    alias pariatur quam consequatur porro ipsum reprehenderit,
                    ex iusto dolore velit. Consectetur, officiis?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="card rounded-16px shadow-sm"
              style={{ width: '336px', height: '204px' }}
            >
              <div className="card-body ps-4 pt-4">
                <h5 className="card-title mb-3">Jam Tangan Casio</h5>
                <h6 className="card-subtitle text-muted mb-3">Aksesoris</h6>
                <h4 className="card-text fw-bold mb-3">Rp 250.000</h4>
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
            <div className="card rounded-16px mt-3" style={{ width: '336px' }}>
              <div className="card-body ps-4">
                <div className="row d-flex align-items-center">
                  <div className="col-lg-3">
                    <img src={userPhoto} alt="Buyer" className="w-100" />
                  </div>
                  <div className="col-lg-9">
                    <h5>Nama Penjual</h5>
                    <p>Kota</p>
                  </div>
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
          <div className="card rounded-16px mt-3" style={{ height: '80px' }}>
            <div className="card-body">
              <div className="row d-flex align-items-center">
                <div className="col-lg-3">
                  <img src={jamKecil} alt="Buyer" />
                </div>
                <div className="col-lg-9">
                  <h5 className="fw-bold">Jam Tangan Casio</h5>
                  <h6 className="fw-bold">Rp 250.000</h6>
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
}
