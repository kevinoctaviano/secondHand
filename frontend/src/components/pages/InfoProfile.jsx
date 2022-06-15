import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCamera } from "@fortawesome/free-solid-svg-icons";
import Form from "react-validation/build/form";

export default function InfoProfile() {
  return (
    <div className="container">
      <div className="w-75 mx-auto">
        <FontAwesomeIcon icon={faArrowLeft} className="custom-font-3" />
        <span>
          <div className="mx-auto text-center py-4 custom-bg-photo-profile">
            <FontAwesomeIcon icon={faCamera} className="custom-font-4" />
          </div>
        </span>
      </div>

      <div className="w-50 mx-auto">
        <Form>
          <div className="form-group mb-3">
            <label htmlFor="nama" className="text-dark font-weight-bold mb-1 custom-font-2">
              Nama*
            </label>
            <input type="text" className="form-control p-2 custom-font-1" placeholder="Nama"/>
          </div>

          <div className="form-group mb-3">
            <label htmlFor="kota" className="text-dark font-weight-bold mb-1 custom-font-2">
              Kota*
            </label>
            <div className="row">
              <div className="col-md-12">
                <select className="form-select text-muted w-100 px-1 py-2 border rounded" aria-label="Default select example" name="" id="">
                  <option deafultvalue={{ value: null}}>Pilih Kota</option>
                  <option value="Jakarta">Jakarta</option>
                  <option value="Bandung">Bandung</option>
                  <option value="Yogyakarta">Yogyakarta</option>
                  <option value="Semarang">Semarang</option>
                  <option value="Malang">Malang</option>
                </select>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="alamat" className="text-dark font-weight-bold mb-1 custom-font-2">
              Alamat*
            </label>
            <input type="text" className="form-control p-2 pt-4 pb-5 custom-font-1" placeholder="Contoh: Jalan Ikan Hiu 33" />
          </div>

          <div className="form-group">
            <label
              htmlFor="nohandphone"
              className="text-dark font-weight-bold mb-1 custom-font-2"
            >
              No Handphone*
            </label>
            <input
              type="text"
              className="form-control p-2 custom-font-1"
              placeholder="Contoh: +628123456789"
            />
          </div>

          <button className="mt-3 form-group font-weight-bold text-white border-light py-2 w-100 custom-border-auth custom-button-auth custom-font-1">
            Simpan
          </button>
        </Form>
      </div>
    </div>
  );
}
