import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";

export default function InfoProductAdd() {
  return (
    <div className="container">
      <div className="w-75 mx-auto">
        <FontAwesomeIcon icon={faArrowLeft} className="custom-font-3" />
        <span>
          <div className="mx-auto w-50 py-4">
            <Form>
              <div className="form-group mb-3">
                <label
                  htmlFor="namaproduk"
                  className="text-dark font-weight-bold mb-1 custom-font-2"
                >
                  Nama Produk
                </label>
                <input
                  type="text"
                  className="form-control p-2 custom-font-1"
                  placeholder="Nama Produk"
                />
              </div>

              <div className="form-group mb-3">
                <label
                  htmlFor="hargaproduk"
                  className="text-dark font-weight-bold mb-1 custom-font-2"
                >
                  Harga Produk
                </label>
                <input
                  type="text"
                  className="form-control p-2 custom-font-1"
                  placeholder="Rp 0,00"
                />
              </div>

              <div className="form-group mb-3">
                <label
                  htmlFor="kategori"
                  className="text-dark font-weight-bold mb-1 custom-font-2"
                >
                  Kategori
                </label>
                <div className="row">
                  <div className="col-md-12">
                    <select
                      className="form-select text-muted w-100 px-1 py-2 border rounded"
                      aria-label="Default select example"
                    >
                      <option defaultValue={{ value: null }}>
                        Pilih Kategori
                      </option>
                      <option value="Jember">Jam Tangan</option>
                      <option value="Jakarta">Elektronik</option>
                      <option value="Surabaya">Komputer &amp; Aksesoris</option>
                      <option value="Malang">Hobi &amp; Koleksi</option>
                      <option value="Bali">Perawatan &amp; Kecantikan</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label
                  htmlFor="password"
                  className="text-dark font-weight-bold mb-1 custom-font-2"
                >
                  Deskripsi
                </label>
                <input
                  type="text"
                  className="form-control p-2 pt-4 pb-5 custom-font-1"
                  placeholder="Contoh: Jalan Ikan Hiu 33"
                />
              </div>

              <div className="form-group">
                <label
                  htmlFor="password"
                  className="text-dark font-weight-bold mb-1 custom-font-2"
                >
                  Foto Produk
                </label>
                <div className="text-center py-4 custom-bg-photo-product">
                  <FontAwesomeIcon
                    icon={faPlusSquare}
                    className="custom-font-3"
                  />
                </div>
              </div>

              <div className="">
                <button className="mt-3 form-group font-weight-bold py-2 w-50 custom-border-auth custom-font-1">
                  Preview
                </button>

                <button className="mt-3 form-group font-weight-bold text-white border-light py-2 w-50 custom-border-auth custom-button-auth custom-font-1">
                  Terbitkan
                </button>
              </div>
            </Form>
          </div>
        </span>
      </div>
    </div>
  );
}
