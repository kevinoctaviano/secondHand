import React, { useState, useRef } from 'react';
import SidePicture from './components/SidePicture';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect, useHistory } from 'react-router-dom';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';

import { login } from '../../actions/auth';

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

export default function Login() {
  const form = useRef();
  const checkBtn = useRef();

  const navigate = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      let formData = new FormData();
      formData.append('email', email);
      formData.append('password', password);
      dispatch(login(formData))
        .then(() => {
          navigate.push('/');
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 p-0">
            <SidePicture />
          </div>
          <div className="col-lg-6 d-flex justify-content-center align-items-center margin-custom">
            <Form className="w-75" onSubmit={handleLogin} ref={form}>
              {message && (
                <div className="form-group mt-2">
                  <div className="alert alert-danger mx-auto" role="alert">
                    {message}
                  </div>
                </div>
              )}
              <h1 className="font-custom">Masuk</h1>
              <div className="mb-3">
                <label htmlFor="email" className="form-label label-14px">
                  Email
                </label>
                <Input
                  type="text"
                  className="form-control rounded-16px"
                  name="email"
                  placeholder="Contoh:johndee@gmail.com"
                  onChange={onChangeEmail}
                  validations={[required]}
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
                  placeholder="Masukkan password"
                  onChange={onChangePassword}
                  validations={[required]}
                />
              </div>
              <div className="d-grid gap-4">
                <button
                  disabled={loading}
                  className="btn btn-purple rounded-16px"
                >
                  {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                  <span>Masuk</span>
                </button>
                <label className="text-center">
                  Belum punya akun?{' '}
                  <span>
                    <Link className="a-ungu" to={'/register'}>
                      Daftar di sini
                    </Link>
                  </span>
                </label>
              </div>
              <CheckButton style={{ display: 'none' }} ref={checkBtn} />
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
