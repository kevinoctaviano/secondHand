import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCamera } from '@fortawesome/free-solid-svg-icons';
import Form from 'react-validation/build/form';

export default function InfoProfile() {
  return (
    <div className="container-fluid p-0 row m-0 mt-4">
      <div className="col-lg-2 d-flex justify-content-end">
        <FontAwesomeIcon icon={faArrowLeft} className="custom-font-3" />
      </div>
      <div className="col-lg-8">
        <div className="d-flex justify-content-center">
          <div className="d-flex justify-content-center align-items-center custom-bg-photo-profile">
            <FontAwesomeIcon icon={faCamera} className="custom-font-4" />
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="w-50 mt-3">
            <Form>
              <div className="form-group mb-3">
                <label htmlFor="nama" className="fw-bold custom-font-2">
                  Nama*
                </label>
                <input
                  type="text"
                  className="form-control custom-font-1 rounded-16px"
                  placeholder="Nama"
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="kota" className="fw-bold custom-font-2">
                  Kota*
                </label>
                <div className="row">
                  <div className="col-md-12">
                    <select
                      className="form-select text-muted w-100 border rounded-16px"
                      aria-label="Default select example"
                      name=""
                      id=""
                    >
                      <option deafultvalue={{ value: null }}>Pilih Kota</option>
                      <option value="Jakarta">Jakarta</option>
                      <option value="Bandung">Bandung</option>
                      <option value="Yogyakarta">Yogyakarta</option>
                      <option value="Semarang">Semarang</option>
                      <option value="Malang">Malang</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="alamat" className="fw-bold custom-font-2">
                  Alamat*
                </label>
                <textarea
                  className="form-control alamat rounded-16px"
                  cols="3"
                  placeholder="Contoh: Jalan Ikan Hiu 33"
                ></textarea>
              </div>

              <div className="form-group mb-1">
                <label htmlFor="nohandphone" className="fw-bold custom-font-2">
                  No Handphone*
                </label>
                <input
                  type="text"
                  className="form-control custom-font-1 rounded-16px"
                  placeholder="Contoh: +628123456789"
                />
              </div>

              <button className="mt-3 form-group fw-bold text-white border-light py-2 w-100 custom-border-auth custom-button-auth custom-font-1">
                Simpan
              </button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
