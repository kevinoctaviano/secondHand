import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {
  getDataProductByKategori,
  updateDataProduct,
} from '../../actions/user';
import Form from 'react-validation/build/form';
import propic from '../assets/svg/product-picture.svg';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'swiper/css/bundle';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const mapStateToProps = (state) => {
  return {
    kategori: state.kategori.kategori,
    barangKategori: state.barang.barangKategori,
    message: state.barang.message,
  };
};

function EditDaftarJual(props) {
  const dispatch = useDispatch();
  const params = useParams();
  const [preview, setPreview] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const barangID = props.barangKategori.filter(
    (barang) => String(barang.idProduct) === params.id
  );

  useEffect(() => {
    dispatch(getDataProductByKategori);
  }, [dispatch, props]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitPublish = async (data) => {
    let formData = new FormData();
    for (const image of selectedFiles) {
      formData.append('imageProduct', image);
    }
    formData.append('namaProduct', data.namaProduct);
    formData.append('hargaProduct', data.hargaProduct);
    formData.append('idKategori', data.idKategori);
    formData.append('deskripsiProduct', data.deskripsi);
    formData.append('statusProduct', 'PUBLISH');

    const idProduct = barangID[0].idProduct;
    const updateData = dispatch(updateDataProduct(idProduct, formData))
      .then(() => {
        setSelectedFiles([]);
        toast.success(`Berhasil mengubah data!`, {
          autoClose: 5000,
          onClose: () => history.push('/daftar-jual'),
        });
      })
      .catch((error) => {
        history.push('/daftar-jual');
        toast.error(`${error.message}`, {
          autoClose: 5000,
          onClose: () => history.push('/daftar-jual'),
        });
      })
      .finally(() => {
        history.push('/daftar-jual');
      });

    toast.promise(updateData, {
      pending: 'Sedang mengubah data...',
    });
  };

  const onSubmitBuat = async (data) => {
    let formData = new FormData();
    for (const image of selectedFiles) {
      formData.append('imageProduct', image);
    }
    formData.append('namaProduct', data.namaProduct);
    formData.append('hargaProduct', data.hargaProduct);
    formData.append('idKategori', data.idKategori);
    formData.append('deskripsiProduct', data.deskripsi);
    formData.append('statusProduct', 'DIBUAT');

    const idProduct = barangID[0].idProduct;
    const updateData = dispatch(updateDataProduct(idProduct, formData))
      .then(() => {
        setSelectedFiles([]);
        toast.success(`Berhasil mengubah data!`, {
          autoClose: 5000,
          onClose: () => history.push('/daftar-jual'),
        });
      })
      .catch((error) => {
        history.push('/daftar-jual');
        toast.error(`${error.message}`, {
          autoClose: 5000,
          onClose: () => history.push('/daftar-jual'),
        });
      })
      .finally(() => {
        history.push('/daftar-jual');
      });

    toast.promise(updateData, {
      pending: 'Sedang mengubah data...',
    });
  };

  const handleImageChange = (e) => {
    // console.log(e.target.files);
    setSelectedFiles(e.target.files);
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      // console.log('filesArray: ', filesArray);

      // selectedFiles(filesArray);
      setPreview((prevImages) => prevImages.concat(filesArray));
      Array.from(e.target.files).map(
        (file) => URL.revokeObjectURL(file) // avoid memory leak
      );
    }
  };

  const renderPhotos = (source) => {
    // console.log('source: ', source);
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
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
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
          {/* <Form className="w-75" onSubmit={handleSubmit(onSubmit)}> */}
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
                className={`form-control ${
                  errors.namaProduct ? 'is-invalid' : ''
                } p-2 custom-font-1 rounded-16px`}
                placeholder="Nama Produk"
                {...register('namaProduct', { required: true })}
                defaultValue={barangID[0]?.namaProduct}
              />
              {errors.namaProduct && (
                <p className="error-message">*Nama product is required.</p>
              )}
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
                className={`form-control ${
                  errors.hargaProduct ? 'is-invalid' : ''
                } p-2 custom-font-1 rounded-16px`}
                placeholder="Rp 0,00"
                {...register('hargaProduct', { required: true })}
                defaultValue={barangID[0]?.hargaProduct}
              />
              {errors.hargaProduct && (
                <p className="error-message">*Harga product is required.</p>
              )}
            </div>

            <div className="form-group mb-3">
              <label
                htmlFor="kategori"
                className="text-dark fw-bold mb-1 custom-font-2"
              >
                Kategori
              </label>
              <select
                className={`form-select ${
                  errors.idkategori ? 'is-invalid' : ''
                } text-muted w-100 px-1 py-2 border rounded-16px`}
                aria-label="Default select example"
                {...register('idKategori', { required: true })}
                defaultValue={barangID[0]?.kategori?.idKategori}
              >
                <option defaultValue={barangID[0]?.kategori?.idKategori}>
                  Pilih Kategori
                </option>
                {props.kategori.map((item, index = 1) => (
                  <option value={item.idKategori} key={index}>
                    {item.namaKategori}
                  </option>
                ))}
              </select>
              {errors.idKategori && (
                <p className="error-message">*Kategori is required.</p>
              )}
            </div>

            <div className="form-group mb-3">
              <label
                htmlFor="deskripsi"
                className="text-dark fw-bold mb-1 custom-font-2"
              >
                Deskripsi
              </label>
              <textarea
                name="deskripsi"
                className={`form-control ${
                  errors.deskripsi ? 'is-invalid' : ''
                } alamat rounded-16px`}
                cols="3"
                placeholder="Deskripsi..."
                {...register('deskripsi', { required: true })}
                defaultValue={barangID[0]?.deskripsiProduct}
              ></textarea>
              {errors.deskripsi && (
                <p className="error-message">*Deskripsi is required.</p>
              )}
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
                    {...register('image', { required: true })}
                    onChange={handleImageChange}
                  />
                  <div className="label-holder">
                    <label htmlFor="file" className="label">
                      <img src={propic} alt="gambar" />
                    </label>
                  </div>
                </div>
                {barangID[0]?.imageProduct?.urlImage
                  ? barangID[0]?.imageProduct?.map((item) => (
                      <div
                        className="col-lg-2"
                        key={item?.imageProduct?.idImage}
                      >
                        <img
                          className="img-fluid img-mini-preview"
                          src={item?.imageProduct?.urlImage}
                          alt={item?.imageProduct?.idImage}
                        />
                      </div>
                    ))
                  : renderPhotos(preview)}
              </div>
              {errors.image && (
                <p className="error-message">*Foto product is required.</p>
              )}
            </div>

            <div className="mt-2">
              <button
                onClick={handleSubmit(onSubmitPublish)}
                className="mt-3 form-group font-weight-bold py-2 w-50 custom-border-auth custom-font-1"
              >
                Terbitkan Produk
              </button>
              <button
                onClick={handleSubmit(onSubmitBuat)}
                type="submit"
                className="mt-3 form-group font-weight-bold text-white border-light py-2 w-50 custom-border-auth custom-button-auth custom-font-1"
              >
                Buat Produk
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, null)(EditDaftarJual);
