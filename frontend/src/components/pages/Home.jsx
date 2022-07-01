/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';
import img from '../assets/svg/img-banner.svg';
import bgMobile from '../assets/svg/bg-mobile-home.svg';
import kotakungu from '../assets/svg/kotak-ungu.svg';
import kotakijo from '../assets/svg/kotak-ijo.svg';
import picture from '../assets/svg/cardimage.svg';
import image from '../assets/svg/cardimage1.svg';

export default function Home() {
  return (
    <>
      <div className="container-fluid p-0 margin-top-home">
        <img src={bgMobile} className="w-100 bg-home" alt="" />
        <div className="row">
          <div className="col-lg-2 d-flex align-items-center">
            <img src={kotakijo} alt="" className="kotak-home" />
          </div>
          <div className="col-lg-8 d-flex justify-content-center">
            <img src={img} alt="" className="kotak-home" />
          </div>
          <div className="col-lg-2 d-flex align-items-center justify-content-end">
            <img src={kotakungu} alt="" className="kotak-home" />
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="col-lg-12 mt-5">
          <h4>Telusuri Kategori</h4>
        </div>
        <div className="container mt-4 m-0">
          <div className="row">
            <Button
              className="btn-purple rounded-16px d-flex justify-content-center align-items-center"
              style={{
                width: '115px',
                height: '48px',
                fontSize: '15px',
                gap: '8px',
              }}
            >
              <span>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </span>
              Semua
            </Button>
            <Button
              className="btn-light btn-purple-kategori rounded-16px d-flex justify-content-center align-items-center ms-3"
              style={{
                width: '108px',
                height: '48px',
                fontSize: '15px',
                gap: '8px',
              }}
            >
              <span>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </span>
              Hobi
            </Button>
            <Button
              className="btn-light btn-purple-kategori rounded-16px d-flex justify-content-center align-items-center ms-3"
              style={{
                width: '155px',
                height: '48px',
                fontSize: '15px',
                gap: '8px',
              }}
            >
              <span>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </span>
              Kendaraan
            </Button>
            <Button
              className="btn-light btn-purple-kategori rounded-16px d-flex justify-content-center align-items-center ms-3"
              style={{
                width: '107px',
                height: '48px',
                fontSize: '15px',
                gap: '8px',
              }}
            >
              <span>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </span>
              Baju
            </Button>
            <Button
              className="btn-light btn-purple-kategori rounded-16px d-flex justify-content-center align-items-center ms-3"
              style={{
                width: '142px',
                height: '48px',
                fontSize: '15px',
                gap: '8px',
              }}
            >
              <span>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </span>
              Elektronik
            </Button>
            <Button
              className="btn-light btn-purple-kategori rounded-16px d-flex justify-content-center align-items-center ms-3"
              style={{
                width: '151px',
                height: '48px',
                fontSize: '15px',
                gap: '8px',
              }}
            >
              <span>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </span>
              Kesehatan
            </Button>
          </div>
        </div>
        <div className="container mt-4 row">
          <div className="col-lg-2">
            <div className="card mb-3 shadow-md px-2 pt-2 pb-4">
              <img src={picture} />
              <h5 className="mt-2 text-sm font-normal">Jam Tangan Casio</h5>
              <h5 className="mt-1 text-10px font-normal text-muted">
                Aksesoris
              </h5>
              <h5 className="mt-2 text-sm font-normal">Rp 250.000</h5>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="card mb-3 shadow-md px-2 pt-2 pb-4">
              <img src={image} />
              <h5 className="mt-2 text-sm font-normal">Jam Tangan Casio</h5>
              <h5 className="mt-1 text-10px font-normal text-muted">
                Aksesoris
              </h5>
              <h5 className="mt-2 text-sm font-normal">Rp 250.000</h5>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="card mb-3 shadow-md px-2 pt-2 pb-4">
              <img src={picture} />
              <h5 className="mt-2 text-sm font-normal">Jam Tangan Casio</h5>
              <h5 className="mt-1 text-10px font-normal text-muted">
                Aksesoris
              </h5>
              <h5 className="mt-2 text-sm font-normal">Rp 250.000</h5>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="card mb-3 shadow-md px-2 pt-2 pb-4">
              <img src={image} />
              <h5 className="mt-2 text-sm font-normal">Jam Tangan Casio</h5>
              <h5 className="mt-1 text-10px font-normal text-muted">
                Aksesoris
              </h5>
              <h5 className="mt-2 text-sm font-normal">Rp 250.000</h5>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="card mb-3 shadow-md px-2 pt-2 pb-4">
              <img src={picture} />
              <h5 className="mt-2 text-sm font-normal">Jam Tangan Casio</h5>
              <h5 className="mt-1 text-10px font-normal text-muted">
                Aksesoris
              </h5>
              <h5 className="mt-2 text-sm font-normal">Rp 250.000</h5>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="card mb-3 shadow-md px-2 pt-2 pb-4">
              <img src={image} />
              <h5 className="mt-2 text-sm font-normal">Jam Tangan Casio</h5>
              <h5 className="mt-1 text-10px font-normal text-muted">
                Aksesoris
              </h5>
              <h5 className="mt-2 text-sm font-normal">Rp 250.000</h5>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="card mb-3 shadow-md px-2 pt-2 pb-4">
              <img src={picture} />
              <h5 className="mt-2 text-sm font-normal">Jam Tangan Casio</h5>
              <h5 className="mt-1 text-10px font-normal text-muted">
                Aksesoris
              </h5>
              <h5 className="mt-2 text-sm font-normal">Rp 250.000</h5>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="card mb-3 shadow-md px-2 pt-2 pb-4">
              <img src={image} />
              <h5 className="mt-2 text-sm font-normal">Jam Tangan Casio</h5>
              <h5 className="mt-1 text-10px font-normal text-muted">
                Aksesoris
              </h5>
              <h5 className="mt-2 text-sm font-normal">Rp 250.000</h5>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="card mb-3 shadow-md px-2 pt-2 pb-4">
              <img src={picture} />
              <h5 className="mt-2 text-sm font-normal">Jam Tangan Casio</h5>
              <h5 className="mt-1 text-10px font-normal text-muted">
                Aksesoris
              </h5>
              <h5 className="mt-2 text-sm font-normal">Rp 250.000</h5>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="card mb-3 shadow-md px-2 pt-2 pb-4">
              <img src={image} />
              <h5 className="mt-2 text-sm font-normal">Jam Tangan Casio</h5>
              <h5 className="mt-1 text-10px font-normal text-muted">
                Aksesoris
              </h5>
              <h5 className="mt-2 text-sm font-normal">Rp 250.000</h5>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="card mb-3 shadow-md px-2 pt-2 pb-4">
              <img src={picture} />
              <h5 className="mt-2 text-sm font-normal">Jam Tangan Casio</h5>
              <h5 className="mt-1 text-10px font-normal text-muted">
                Aksesoris
              </h5>
              <h5 className="mt-2 text-sm font-normal">Rp 250.000</h5>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="card mb-3 shadow-md px-2 pt-2 pb-4">
              <img src={image} />
              <h5 className="mt-2 text-sm font-normal">Jam Tangan Casio</h5>
              <h5 className="mt-1 text-10px font-normal text-muted">
                Aksesoris
              </h5>
              <h5 className="mt-2 text-sm font-normal">Rp 250.000</h5>
            </div>
          </div>
        </div>
        <Button className="btn-purple-jual rounded-16px position-jual fixed-bottom">
          <FontAwesomeIcon icon={faPlus} />
          Jual
        </Button>
      </div>
    </>
  );
}
