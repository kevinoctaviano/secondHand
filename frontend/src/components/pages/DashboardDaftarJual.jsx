import { faAngleRight, faBoxOpen, faDollarSign, faHeart, faPlusSquare } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import React from "react";
  import userPhoto from '../assets/svg/user-photo.svg';
  
  export default function DashboardDaftarJual() {
    return (
      <div className="container mt-4">
        <div className="w-75 mx-auto">
          <p className="text-dark font-weight-bold custom-font-6">
            Daftar Jual Saya
          </p>
  
          <div className="border my-3 px-3 pt-3 custom-border-auth">
            <div className="row">
              <div className="col-md-1">
                <img src={userPhoto} alt="" className="w-100" />
              </div>
  
              <div className="col-md-9">
                <p className="text-dark font-weight-bold custom-font-1">
                  Nama Penjual
                </p>
                <p className="text-muted custom-font-5 custom-space-top">Kota</p>
              </div>
  
              <div className="col-md-2 text-right">
                <button className="mt-1 form-group font-weight-bold py-2 w-50 custom-border-button custom-border-auth custom-font-2">
                  Edit
                </button>
              </div>
            </div>
          </div>
  
          <div className="row">
            <div className="col-md-4">
              <div className="w-100 border px-4 py-4 custom-border-auth">
                <p className="text-dark font-weight-bold">Kategori</p>
  
                <div className="d-flex justify-content-between custom-font-auth">
                  <div className="row align-items-center">
                    <div className="col-md-12">
                      <span className="mr-2">
                        <FontAwesomeIcon icon={faBoxOpen} />
                      </span>
                      <span>Semua Produk</span>
                    </div>
                  </div>
                  <span>
                    <FontAwesomeIcon icon={faAngleRight} />
                  </span>
                </div>
                <hr />
  
                <div className="d-flex justify-content-between">
                  <div className="row align-items-center">
                    <div className="col-md-12">
                      <span className="mr-2 text-muted">
                        <FontAwesomeIcon icon={faHeart} />
                      </span>
                      <span className="text-dark">Diminati</span>
                    </div>
                  </div>
                  <span className="text-muted">
                    <FontAwesomeIcon icon={faAngleRight} />
                  </span>
                </div>
                <hr />
  
                <div className="d-flex justify-content-between">
                  <div className="row align-items-center">
                    <div className="col-md-12">
                      <span className="mr-2 text-muted">
                        <FontAwesomeIcon icon={faDollarSign} />
                      </span>
                      <span className="text-dark">Terjual</span>
                    </div>
                  </div>
                  <span className="text-muted">
                    <FontAwesomeIcon icon={faAngleRight} />
                  </span>
                </div>
              </div>
            </div>
  
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-4">
                  <div className="w-100 h-100 mx-auto text-muted py-5 row align-items-center custom-border-style custom-border-auth">
                    <div className="col-md-12 text-center">
                    <FontAwesomeIcon
                      icon={faPlusSquare}
                      className="custom-font-3"
                    />
                    <p className="custom-font-2">Tambah Produk</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  