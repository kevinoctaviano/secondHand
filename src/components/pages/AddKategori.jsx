import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Form from 'react-validation/build/form';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { connect } from 'react-redux';

import { postKategori } from '../../actions/user';

const mapStateToProps = (state) => {
  return {
    isNull: state.kategori.isNull,
    kategori: state.kategori.kategori,
    message: state.kategori.message,
  };
};

const AddKategori = (props) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleKategori = async (data) => {
    const postDataKategori = dispatch(postKategori(data.namaKategori));
    toast.promise(postDataKategori, {
      pending: 'Sedang menambahkan data...',
      success: `Berhasil menambahkan data kategori!`,
      error: 'Promise rejected 🤯',
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
          <Form className="w-75" onSubmit={handleSubmit(handleKategori)}>
            <div className="form-group mb-3">
              <label
                className="text-dark fw-bold mb-1 custom-font-2"
                htmlFor="namaKategori"
              >
                Kategori
              </label>
              <input
                type="text"
                className={`form-control ${
                  errors.namaKategori ? 'is-invalid' : ''
                } p-2 custom-font-1 rounded-16px`}
                placeholder="Nama Kategori"
                {...register('namaKategori', { required: true })}
              />
              {errors.namaKategori && (
                <p className="error-message">*Kategori is required.</p>
              )}
            </div>
            <div className="d-flex justify-content-center">
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
};

export default connect(mapStateToProps, null)(AddKategori);
