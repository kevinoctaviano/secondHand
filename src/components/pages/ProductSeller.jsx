import { Button, Modal } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css/bundle';
import React from 'react';
import jam from '../assets/svg/jam.svg';
import userPhoto from '../assets/svg/user-photo.svg';
import { Link } from 'react-router-dom';

export default function ProductSeller() {
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
          </div>
          <div className="col-lg-4">
            <div className="card-border d-flex justify-content-center mt-3">
              <div
                className="card rounded-16px shadow-sm"
                style={{ width: '336px', height: '266px' }}
              >
                <div className="card-body ps-4 pt-4">
                  <h5 className="card-title mb-3">Jam Tangan Casio</h5>
                  <h6 className="card-subtitle text-muted mb-3">Aksesoris</h6>
                  <h4 className="card-text fw-bold mb-3">Rp 250.000</h4>
                  <div className="d-grid">
                    <Button className="btn-purple rounded-16px text-center">
                      Terbitkan
                    </Button>
                    <Link className="" to={'/info-product-add'}>
                      <Button className="btn-edit rounded-16px text-center mt-3 w-100">
                        Edit
                      </Button>
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
                      <img
                        src={userPhoto}
                        alt="Buyer"
                        className="seller-photo"
                      />
                    </div>
                    <div className="sller-desk col-lg-9">
                      <h5>Nama Penjual</h5>
                      <p>Kota</p>
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
        </div>
      </div>
    </>
  );
}
