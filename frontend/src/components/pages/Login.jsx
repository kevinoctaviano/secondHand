import React from 'react';
import SidePicture from './components/SidePicture';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 p-0">
            <SidePicture />
          </div>
          <div className="col-lg-6 d-flex justify-content-center align-items-center margin-custom">
            <form className="w-75">
              <h1 className="font-custom">Masuk</h1>
              <div className="mb-3">
                <label htmlFor="email" className="form-label label-14px">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control rounded-16px"
                  id="email"
                  placeholder="Contoh:johndee@gmail.com"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label label-14px">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control rounded-16px"
                  id="password"
                  placeholder="Masukkan password"
                />
              </div>
              <div className="d-grid gap-4">
                <button type="submit" className="btn btn-purple rounded-16px">
                  Masuk
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
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
