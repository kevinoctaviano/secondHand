import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal } from 'react-bootstrap';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import userPhoto from '../assets/svg/user-pembeli.svg';
import jam from '../assets/svg/jam-kecil.svg';

export default function InfoPenawar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleWhatsapp = () => {
    window.open('https://wa.me/085156896874', '_blank');
  };

  const history = useHistory();
  const handleGoBack = () => {
    history.goBack();
  };
  return (
    <>
      <div className="container-fluid row m-0 mt-4">
        <div
          onClick={handleGoBack}
          className="col-lg-2 d-flex justify-content-end"
        >
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="custom-font-3 arrow-left"
          />
        </div>
        <div className="col-lg-10">
          <div className="center-custom">
            <div className="card rounded-16px card-custom">
              <div className="card-body ps-4">
                <div className="row d-flex align-items-center">
                  <div className="col-sm-3">
                    <img src={userPhoto} alt="Buyer" className="img-fluid" />
                  </div>
                  <div className="col-sm-9">
                    <h6>Nama Pembeli</h6>
                    <p className="text-muted">Kota</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h6 className="fw-bold mt-3 center-custom-h6">
            Daftar Produkmu yang Ditawar
          </h6>
          <div className="center-custom">
            <div className="rounded-16px card-custom">
              <div className="card-body ps-4">
                <div className="row">
                  <div className="col-sm-2 d-flex align-items-center">
                    <img src={jam} alt="Jam" className="img-fluid" />
                  </div>
                  <div className="col-sm-7">
                    <p className="text-muted m-0 label-10px">
                      Penawaran Produk
                    </p>
                    <h6>Jam Tangan Casio</h6>
                    <h6>Rp 250.000</h6>
                    <h6>Ditawar Rp 250.000</h6>
                  </div>
                  <div className="col-sm-3 d-flex justify-content-end">
                    <p className="text-muted m-0 label-10px">20 Apr, 14:04</p>
                  </div>
                </div>
                <div className="d-flex justify-content-end">
                  <button
                    className="mt-3 form-group fw-bold custom-border-auth custom-font-1"
                    style={{
                      width: '158px',
                      height: '36px',
                      marginRight: '16px',
                      marginTop: '16px',
                    }}
                  >
                    Tolak
                  </button>
                  <button
                    className="mt-3 form-group fw-bold text-white border-light custom-border-auth custom-button-auth custom-font-1"
                    style={{ width: '158px', height: '36px' }}
                    onClick={handleShow}
                  >
                    Terima
                  </button>
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
          <h5 className="fw-bold">
            Yeay kamu berhasil mendapat harga yang sesuai
          </h5>
          <p className="label-14px text-muted">
            Segera hubungi pembeli melalui whatsapp untuk transaksi selanjutnya
          </p>
          <div className="card rounded-16px mt-3">
            <div className="card-body">
              <h5 className="fw-bold text-center">Product Match</h5>
              <div className="row mb-3">
                <div className="col-lg-3 d-flex justify-content-center align-items-center">
                  <img src={userPhoto} alt="Buyer" className="img-fluid" />
                </div>
                <div className="col-lg-9">
                  <h6>Nama Pembeli</h6>
                  <p className="text-muted">Kota</p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3 d-flex justify-content-center align-items-center">
                  <img src={jam} alt="Jam" className="img-fluid" />
                </div>
                <div className="col-lg-9">
                  <h6>Jam Tangan Casio</h6>
                  <p className="m-0">
                    <del>Rp 250.000</del>
                  </p>
                  <p>Ditawar Rp 200.000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="d-grid gap-4 mt-3">
            <button
              className="btn-purple rounded-16px"
              onClick={handleWhatsapp}
            >
              Hubungi via Whatsapp{' '}
              <FontAwesomeIcon
                icon={faWhatsapp}
                style={{ marginLeft: '14px', fontSize: '16px' }}
              />
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
