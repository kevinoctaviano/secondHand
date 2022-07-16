import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faCamera,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import Form from 'react-validation/build/form';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { updateUser, changePassword } from '../../actions/user';

const mapStateToProps = (state) => {
  return {
    // user
    isNullUser: state.user.isNull,
    user: state.user.user,
    message: state.user.message,
  };
};

const InfoProfile = (props) => {
  const dispatch = useDispatch();
  const form = useRef();
  const history = useHistory();
  const [show, setShow] = useState(false);
  const [nama, setNama] = useState(props.user.fullName);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [alamat, setAlamat] = useState('');
  const [noHandphone, setNoHandphone] = useState('');
  const [kota, setKota] = useState('');
  const [password, setPassword] = useState('');

  // Handle Update User
  const handleNama = (e) => {
    const fullName = e.target.value;
    setNama(fullName);
  };
  const handleAlamat = (e) => {
    const address = e.target.value;
    setAlamat(address);
  };
  const handleNoHandphone = (e) => {
    const noHP = e.target.value;
    setNoHandphone(noHP);
  };
  const handleKota = (e) => {
    const city = e.target.value;
    setKota(city);
  };
  const handleImageChange = (e) => {
    setSelectedFiles(e.target.files[0]);
  };
  const handleUpdateUser = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append('profileFoto', selectedFiles);
    formData.append('fullName', nama);
    formData.append('kota', kota);
    formData.append('noWa', noHandphone);
    formData.append('alamat', alamat);
    dispatch(
      updateUser(formData)
        .then(() => setShow(true))
        .catch((error) => {
          console.error(error);
        })
    );
  };

  // change password
  const onChangePassword = (e) => {
    const sandi = e.target.value;
    setPassword(sandi);
  };
  const handleChangePassword = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append('password', password);
    dispatch(
      changePassword(formData)
        .then(() => setShow(true))
        .catch((error) => console.error(error))
    );
  };

  const handleClose = () => setShow(false);

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <div className="container-fluid row m-0 mt-4">
      {props.message && show ? (
        <div className="d-flex justify-content-center">
          <div className="alert-custom d-flex align-items-center row">
            <div className="col-md-10 text-center">
              <p className="p-alert">{props.message}</p>
            </div>
            <div className="col-md-2 text-center">
              <button className="btn" onClick={handleClose}>
                <FontAwesomeIcon
                  className="text-white"
                  icon={faTimes}
                  fixedWidth
                />
              </button>
            </div>
          </div>
        </div>
      ) : null}
      <div
        onClick={handleGoBack}
        className="col-lg-2 d-flex justify-content-end"
      >
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="custom-font-3 arrow-left"
        />
      </div>
      <div className="col-lg-10 p-0">
        <div className="center-custom">
          <div className="w-75 mt-3">
            <Form onSubmit={handleUpdateUser} ref={form}>
              <div className="center-custom">
                <div className="d-flex justify-content-center align-items-center custom-bg-photo-profile">
                  <input
                    type="file"
                    name="profile-picture"
                    id="profile-picture"
                    onChange={handleImageChange}
                  />
                  <label htmlFor="profile-picture">
                    <FontAwesomeIcon
                      icon={faCamera}
                      className="custom-font-4"
                    />
                  </label>
                </div>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="nama" className="fw-bold custom-font-2">
                  Nama*
                </label>
                <input
                  type="text"
                  className="form-control custom-font-1 rounded-16px"
                  placeholder="Nama"
                  onChange={handleNama}
                  value={nama}
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
                      name="kota"
                      id="kota"
                      onSelect={handleKota}
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
                  onChange={handleAlamat}
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
                  onChange={handleNoHandphone}
                />
              </div>

              <button
                type="submit"
                className="mt-3 form-group fw-bold text-white border-light py-2 w-100 custom-border-auth custom-button-auth custom-font-1"
              >
                Simpan
              </button>
            </Form>
            <Form onSubmit={handleChangePassword} ref={form}>
              <h4 className="text-center my-3">Change Password</h4>
              <div className="form-group mb-3">
                <label htmlFor="newpassword" className="fw-bold custom-font-2">
                  New password
                </label>
                <input
                  type="password"
                  className="form-control custom-font-1 rounded-16px"
                  placeholder="New password..."
                  onChange={onChangePassword}
                />
              </div>
              <div className="form-group mb-3">
                <label
                  htmlFor="confirm-password"
                  className="fw-bold custom-font-2"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  className="form-control custom-font-1 rounded-16px"
                  placeholder="Confirm password..."
                />
              </div>
              <button
                type="submit"
                className="form-group fw-bold text-white border-light py-2 w-100 custom-border-auth custom-button-auth custom-font-1"
              >
                Change password
              </button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, null)(InfoProfile);
