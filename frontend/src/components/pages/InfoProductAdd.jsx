import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Form from 'react-validation/build/form';
import propic from '../assets/svg/product-picture.svg';

export default function InfoProductAdd() {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleImageChange = (e) => {
    // console.log(e.target.files[])
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      // console.log("filesArray: ", filesArray);

      setSelectedFiles((prevImages) => prevImages.concat(filesArray));
      Array.from(e.target.files).map(
        (file) => URL.revokeObjectURL(file) // avoid memory leak
      );
    }
  };

  const renderPhotos = (source) => {
    console.log('source: ', source);
    return source.map((photo) => {
      return (
        <div className="col-lg-2" key={photo}>
          <img className="img-fluid img-mini-preview" src={photo} alt="" />
        </div>
      );
    });
  };

  const history = useHistory();
  const handleGoBack = () => {
    history.goBack();
  };
  return (
    <div className="container mt-4">
      <div className="row">
        <div
          onClick={handleGoBack}
          className="col-lg-2 d-flex justify-content-end"
        >
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="custom-font-3 arrow-left text-dark"
          />
        </div>
        <div className="col-lg-8 d-flex justify-content-center">
          <Form className="w-75">
            <div className="form-group mb-3">
              <label
                htmlFor="namaproduk"
                className="text-dark fw-bold mb-1 custom-font-2"
              >
                Nama Produk
              </label>
              <input
                type="text"
                className="form-control p-2 custom-font-1 rounded-16px"
                placeholder="Nama Produk"
              />
            </div>

            <div className="form-group mb-3">
              <label
                htmlFor="hargaproduk"
                className="text-dark fw-bold mb-1 custom-font-2"
              >
                Harga Produk
              </label>
              <input
                type="text"
                className="form-control p-2 custom-font-1 rounded-16px"
                placeholder="Rp 0,00"
              />
            </div>

            <div className="form-group mb-3">
              <label
                htmlFor="kategori"
                className="text-dark fw-bold mb-1 custom-font-2"
              >
                Kategori
              </label>
              <div className="row">
                <div className="col-md-12">
                  <select
                    className="form-select text-muted w-100 px-1 py-2 border rounded-16px"
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

            <div className="form-group mb-3">
              <label
                htmlFor="password"
                className="text-dark fw-bold mb-1 custom-font-2"
              >
                Deskripsi
              </label>
              <textarea
                className="form-control alamat rounded-16px"
                cols="3"
                placeholder="Contoh: Jalan Ikan Hiu 33"
              ></textarea>
            </div>

            <div className="form-group">
              <label
                htmlFor="password"
                className="text-dark fw-bold mb-1 custom-font-2"
              >
                Foto Produk
              </label>
              <div className="py-2 custom-bg-photo-product row gap-3">
                <div className="col-lg-2">
                  <input
                    type="file"
                    id="file"
                    multiple
                    onChange={handleImageChange}
                  />
                  <div className="label-holder">
                    <label htmlFor="file" className="label">
                      <img src={propic} alt="gambar" />
                    </label>
                  </div>
                </div>
                {renderPhotos(selectedFiles)}
              </div>
            </div>

            <div className="mt-2">
              <button className="mt-3 form-group font-weight-bold py-2 w-50 custom-border-auth custom-font-1">
                Preview
              </button>
              <button
                type="submit"
                className="mt-3 form-group font-weight-bold text-white border-light py-2 w-50 custom-border-auth custom-button-auth custom-font-1"
              >
                Terbitkan
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
