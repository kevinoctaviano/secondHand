import React from 'react';
import kosong from '../assets/svg/kosong.svg';
import { connect } from 'react-redux';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';

const mapStateToProps = (state) => {
  return {
    // user
    isNullUser: state.user.isNull,
    user: state.user.user,
  };
};

const DaftarJualDiminati = () => {
  // const user = JSON.parse(localStorage.getItem('user'));
  return (
    <div className="container mt-4">
      <div className="w-75 mx-auto">
        <h4 className="text-dark fw-bold">Daftar Jual Saya</h4>
        <Topbar />
        <div className="row">
          <Sidebar />
          <div className="col-md-8 d-flex justify-content-center">
            <div className="row">
              <div className="col-md-4">
                <img src={kosong} alt="Kosong" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, null)(DaftarJualDiminati);
