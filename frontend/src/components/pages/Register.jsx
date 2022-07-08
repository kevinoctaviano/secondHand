import React, { useState, useRef } from 'react';
import SidePicture from './components/SidePicture';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { isEmail } from 'validator';

import { register } from '../../actions/auth';

const required = (value) => {
  if (!value) {
    return (
      <div className="mt-2">
        <div className="alert alert-danger mx-auto" role="alert">
          This field is required!
        </div>
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="mt-2">
        <div className="alert alert-danger mx-auto" role="alert">
          This is not a valid email.
        </div>
      </div>
    );
  }
};

const validpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="mt-2">
        <div className="alert alert-danger mx-auto" role="alert">
          The password must be between 6 and 40 characters.
        </div>
      </div>
    );
  }
};

export default function Register() {
  const form = useRef();
  const checkBtn = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  // const navigate = useHistory();

  const onChangeFullName = (e) => {
    const fullName = e.target.value;
    setFullName(fullName);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(register(fullName, email, password))
        .then(() => {
          setSuccessful(true);
        })
        .catch(() => {
          setSuccessful(false);
        });
    }
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 p-0">
            <SidePicture />
          </div>
          <div className="col-lg-6 d-flex justify-content-center align-items-center margin-custom">
            <Form className="w-75" onSubmit={handleRegister} ref={form}>
              {message && (
                <div className="form-group mt-2">
                  <div
                    className={
                      successful
                        ? 'alert alert-success mx-auto'
                        : 'alert alert-danger mx-auto'
                    }
                    role="alert"
                  >
                    {message}
                  </div>
                  {successful ? (
                    <Link className="btn btn-primary w-100 mt-2" to={'/login'}>
                      Click here to login!
                    </Link>
                  ) : null}
                </div>
              )}
              {!successful && (
                <>
                  <h1 className="font-custom">Daftar</h1>
                  <div className="mb-3">
                    <label htmlFor="fullname" className="form-label label-14px">
                      Nama
                    </label>
                    <Input
                      type="text"
                      className="form-control rounded-16px"
                      name="fullname"
                      onChange={onChangeFullName}
                      validations={[required]}
                      placeholder="Nama Lengkap"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label label-14px">
                      Email
                    </label>
                    <Input
                      type="email"
                      className="form-control rounded-16px"
                      name="email"
                      onChange={onChangeEmail}
                      validations={[required, validEmail]}
                      placeholder="Contoh:johndee@gmail.com"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label label-14px">
                      Password
                    </label>
                    <Input
                      type="password"
                      className="form-control rounded-16px"
                      name="password"
                      onChange={onChangePassword}
                      validations={[required, validpassword]}
                      placeholder="Masukkan password"
                    />
                  </div>
                  <div className="d-grid gap-4">
                    <button
                      type="submit"
                      className="btn btn-purple rounded-16px"
                    >
                      Daftar
                    </button>
                    <label className="text-center">
                      Sudah punya akun?{' '}
                      <span>
                        <Link className="a-ungu" to={'/login'}>
                          Masuk di sini
                        </Link>
                      </span>
                    </label>
                  </div>
                </>
              )}
              <CheckButton style={{ display: 'none' }} ref={checkBtn} />
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
