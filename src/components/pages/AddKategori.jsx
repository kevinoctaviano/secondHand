import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';

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
  const form = useRef();
  const checkBtn = useRef();

  const [kategori, setKategori] = useState('');

  const onChangeKategori = (e) => {
    const kategori = e.target.value;
    setKategori(kategori);
  };

  const handleKategori = (e) => {
    e.preventDefault();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(postKategori(kategori));
    }
  };

  const history = useHistory();
  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <div className="container mt-4">
      {props.message ? (
        <div className="d-flex justify-content-center">
          <div className="alert-custom">
            <p className="p-alert">{props.message}</p>
          </div>
        </div>
      ) : null}
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
          <Form className="w-75" onSubmit={handleKategori} ref={form}>
            <div className="form-group mb-3">
              <label
                htmlFor="namaproduk"
                className="text-dark fw-bold mb-1 custom-font-2"
              >
                Kategori
              </label>
              <Input
                type="text"
                className="form-control p-2 custom-font-1 rounded-16px"
                placeholder="Nama Kategori"
                onChange={onChangeKategori}
                name="kategori"
              />
            </div>
            <div className="d-flex justify-content-center">
              <button
                type="submit"
                className="mt-3 form-group font-weight-bold text-white border-light py-2 w-50 custom-border-auth custom-button-auth custom-font-1"
              >
                Terbitkan
              </button>
            </div>
            <CheckButton style={{ display: 'none' }} ref={checkBtn} />
          </Form>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, null)(AddKategori);
