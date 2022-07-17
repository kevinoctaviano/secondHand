/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  getAllKategori,
  getUserByID,
  getDataProductByKategori,
  getProductByID,
} from '../../actions/user';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/bundle';

import img from '../assets/svg/img-banner.svg';
import bgMobile from '../assets/svg/bg-mobile-home.svg';
import btnJual from '../assets/svg/btn-jual.svg';
import empty from '../assets/svg/empty.svg';
import { useState } from 'react';

const mapStateToProps = (state) => {
  return {
    isNull: state.barang.isNull,
    barang: state.barang.barangKategori,
    message: state.barang.message,
    kategori: state.kategori.kategori,
  };
};

const Home = (props) => {
  const dispatch = useDispatch();
  const [kategori, setKategori] = useState('');
  useEffect(() => {
    // dispatch(getAllDataProduct);
    dispatch(getDataProductByKategori(kategori));
    dispatch(getAllKategori);
    dispatch(getUserByID);
  }, [dispatch, kategori]);

  const onClickDataProductByID = (params) => {
    dispatch(getProductByID(params))
      .then((res) => console.log(res))
      .catch((error) => console.error(error));
  };

  // Mengubah format currency menjadi format rupiah
  let formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  });

  // filter data by kategori
  const handleKategori = (e) => {
    const filter = e.target.value;
    setKategori(filter);
  };

  return (
    <>
      <div className="container-fluid p-0 margin-top-home">
        <img src={bgMobile} className="w-100 bg-home" alt="" />
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: true,
          }}
          autoplay={{ delay: 4000 }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide className="d-flex justify-content-center">
            <img src={img} alt="Product" className="w-75 rounded-16px" />
          </SwiperSlide>
          <SwiperSlide className="d-flex justify-content-center">
            <img src={img} alt="Product" className="w-75 rounded-16px" />
          </SwiperSlide>
          <SwiperSlide className="d-flex justify-content-center">
            <img src={img} alt="Product" className="w-75 rounded-16px" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="container mt-4">
        <div className="col-lg-12 mt-5">
          <h4>Telusuri Kategori</h4>
        </div>
        <div className="container mt-4 m-0">
          <div className="row">
            <Button
              className={
                (!kategori ? 'btn-purple ' : 'btn-light btn-purple-kategori ') +
                'rounded-16px d-flex justify-content-center align-items-center d-grid gap-2'
              }
              style={{
                width: '150px',
                height: '48px',
                fontSize: '15px',
                gap: '8px',
                marginRight: '1rem',
              }}
              value=""
              onClick={handleKategori}
            >
              <span>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </span>
              Semua
            </Button>
            {/* mapping kategori */}
            {props.kategori.map((item) => (
              <Button
                key={item.idKategori}
                className={
                  (kategori === item.namaKategori
                    ? 'btn-purple '
                    : 'btn-light btn-purple-kategori ') +
                  'rounded-16px d-flex justify-content-center align-items-center d-grid gap-2'
                }
                style={{
                  width: '150px',
                  height: '48px',
                  fontSize: '15px',
                  gap: '8px',
                  marginRight: '1rem',
                }}
                value={item.namaKategori}
                onClick={handleKategori}
              >
                <span>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </span>
                {item.namaKategori}
              </Button>
            ))}
          </div>
        </div>
        <div className="container mt-4 row">
          {props.isNull ? (
            <>
              <h1 className="text-dark display-6 text-center">
                {props.message}
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
                className="col-lg-2"
                key={index}
                onClick={onClickDataProductByID}
              >
                <div
                  className="card mb-3 shadow-md px-2 pt-2 pb-4"
                  style={{ height: '250px' }}
                >
                  <Link
                    className="card-home-product"
                    to={`/product-buyer/${item.idProduct}`}
                  >
                    <div className="d-flex justify-content-center">
                      <img
                        src={item.imageProduct[0]?.urlImage}
                        className="card-home"
                        style={{ height: '99.9px' }}
                        alt={item.namaProduct}
                      />
                    </div>
                    <h5 className="mt-2 text-sm text-dark font-normal">
                      {item.namaProduct}
                    </h5>
                    <h5 className="mt-1 text-10px font-normal text-muted">
                      {item.kategori.namaKategori}
                    </h5>
                    <h5 className="mt-2 text-sm text-dark font-normal">
                      {formatter.format(item.hargaProduct)}
                    </h5>
                  </Link>
                  <button className="btn-pink">
                    Add to Wishlist{' '}
                    <span>
                      <FontAwesomeIcon icon={faHeart} fixedWidth />
                    </span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        <Link className="position-jual" to={'/info-product-add'}>
          <img src={btnJual} alt="" />
        </Link>
      </div>
    </>
  );
};

export default connect(mapStateToProps, null)(Home);
