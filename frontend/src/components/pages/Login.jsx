import React from 'react';
import SidePicture from './components/SidePicture';

export default function Login() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 p-0">
            <SidePicture />
          </div>
          <div className="col-lg-6">
            <div className="form-user">
              <h1 className="font-custom">Masuk</h1>
              <form>
                <div className="mb-3">
                  <label for="email" className="form-label label-14px">
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
                  <label for="password" className="form-label label-14px">
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
                      <a className="a-ungu">Daftar di sini</a>
                    </span>
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
