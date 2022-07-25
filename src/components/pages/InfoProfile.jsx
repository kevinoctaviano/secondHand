import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCamera } from '@fortawesome/free-solid-svg-icons';
import Form from 'react-validation/build/form';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { updateUser, changePassword } from '../../actions/user';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  const history = useHistory();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [selectedFiles, setSelectedFiles] = useState();
  // handle password
  const password = useRef({});
  password.current = watch('password', '');

  // Handle Update User
  const handleImageChange = (e) => {
    const profilePicture = e.target.files[0];
    setSelectedFiles(profilePicture);
  };

  const handleUpdateUser = async (data) => {
    // e.preventDefault();
    let formData = new FormData();
    formData.append('profileFoto', selectedFiles);
    formData.append('fullName', data.fullName);
    formData.append('kota', data.kota);
    formData.append('noWa', data.noWa);
    formData.append('alamat', data.alamat);
    formData.append('password', data.password);
    formData.append('username', props.user.username);
    formData.append('email', props.user.email);

    const updateUserData = dispatch(updateUser(formData));
    toast.promise(updateUserData, {
      pending: 'Sedang menambahkan data...',
      success: `Berhasil update data user!`,
      error: 'Promise rejected 🤯',
    });
  };

  const handleChangePassword = (data) => {
    let formData = new FormData();
    formData.append('password', data.password);
    const changePass = dispatch(changePassword(formData));
    toast.promise(changePass, {
      pending: 'Sedang mengubah password...',
      success: `Berhasil update password!`,
      error: 'Promise rejected 🤯',
    });
    changePass.then(() => {
      history.push('/info-profile');
    });
  };

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <div className="container-fluid row m-0 mt-4">
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
            <Form onSubmit={handleSubmit(handleUpdateUser)}>
              <div className="center-custom">
                <div className="d-flex justify-content-center align-items-center custom-bg-photo-profile">
                  <input
                    type="file"
                    id="profile-picture"
                    {...register('profileFoto', { required: true })}
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
              {errors.profileFoto && (
                <p className="error-message">*Foto user is required.</p>
              )}
              <div className="form-group mb-3">
                <label htmlFor="nama" className="fw-bold custom-font-2">
                  Nama*
                </label>
                <input
                  type="text"
                  className={`form-control ${
                    errors.fullName ? 'is-invalid' : ''
                  } custom-font-1 rounded-16px`}
                  placeholder="Nama"
                  {...register('fullName', { required: true })}
                />
                {errors.fullName && (
                  <p className="error-message">*Nama user is required.</p>
                )}
              </div>
              <div className="form-group mb-3">
                <label htmlFor="kota" className="fw-bold custom-font-2">
                  Kota*
                </label>
                <div className="row">
                  <div className="col-md-12">
                    <select
                      className={`form-select ${
                        errors.kota ? 'is-invalid' : ''
                      } text-muted w-100 border rounded-16px`}
                      aria-label="Default select example"
                      name="kota"
                      id="kota"
                      {...register('kota', { required: true })}
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
                  className={`form-control ${
                    errors.alamat ? 'is-invalid' : ''
                  } alamat rounded-16px`}
                  cols="3"
                  placeholder="Contoh: Jalan Ikan Hiu 33"
                  {...register('alamat', { required: true })}
                ></textarea>
                {errors.alamat && (
                  <p className="error-message">*Alamat is required.</p>
                )}
              </div>

              <div className="form-group mb-3">
                <label htmlFor="nohandphone" className="fw-bold custom-font-2">
                  No Handphone*
                </label>
                <input
                  type="text"
                  className={`form-control ${
                    errors.noWa ? 'is-invalid' : ''
                  } custom-font-1 rounded-16px`}
                  placeholder="Contoh: +628123456789"
                  {...register('noWa', { required: true })}
                />
                {errors.noWa && (
                  <p className="error-message">*Phone number is required.</p>
                )}
              </div>

              <button
                type="submit"
                className="mt-3 form-group fw-bold text-white border-light py-2 w-100 custom-border-auth custom-button-auth custom-font-1"
              >
                Simpan
              </button>
            </Form>
            <Form onSubmit={handleSubmit(handleChangePassword)}>
              <h4 className="text-center my-3">Change Password</h4>
              <div className="form-group mb-3">
                <label htmlFor="password" className="fw-bold custom-font-2">
                  Password
                </label>
                <input
                  type="password"
                  className={`form-control ${
                    errors.password ? 'is-invalid' : ''
                  } custom-font-1 rounded-16px`}
                  placeholder="Password..."
                  {...register('password', {
                    required: '*Password is required',
                    minLength: {
                      value: 8,
                      message: '*Password must have at least 8 characters',
                    },
                  })}
                />
                {errors.password && (
                  <p className="error-message">{errors.password.message}</p>
                )}
              </div>
              <div className="form-group mb-1">
                <label
                  htmlFor="confirm-password"
                  className="fw-bold custom-font-2"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  className={`form-control ${
                    errors.confirmPassword ? 'is-invalid' : ''
                  } custom-font-1 rounded-16px`}
                  placeholder="Confirm password..."
                  {...register('confirmPassword', {
                    required: '*Confirm password is required',
                    validate: (value) =>
                      value === password.current ||
                      '*The passwords do not match',
                  })}
                />
                {errors.confirmPassword && (
                  <p className="error-message">
                    {errors.confirmPassword.message}
                  </p>
                )}
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
