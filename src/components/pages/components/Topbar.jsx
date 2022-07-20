import React from 'react';
import userPhoto from '../../assets/svg/user-photo.svg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    // user
    isNullUser: state.user.isNull,
    user: state.user.user,
  };
};

function Topbar(props) {
  return (
    <div className="border my-3 px-3  custom-border-auth">
      <div className="row">
        <div className="col-md-1 pt-3">
          {props.user.profileFoto === null ? (
            <img src={userPhoto} alt={props.user.fullName} className="w-100" />
          ) : (
            <img
              src={props.user.profileFoto}
              alt={props.user.fullName}
              className="profile-photo"
            />
          )}
        </div>

        <div className="col-md-9 pt-3">
          <p className="text-dark font-weight-bold custom-font-1">
            {props.user.fullName}
          </p>
          {props.user.kota === null ? (
            <p className="text-muted custom-font-5 custom-space-top">Kota</p>
          ) : (
            <p className="text-muted custom-font-5 custom-space-top">
              {props.user.kota}
            </p>
          )}
        </div>

        <div className="col-md-2 d-flex justify-content-end">
          <div className="d-flex align-self-center">
            <Link
              to={'/info-profile'}
              className="edit-daftar-jual btn btn-ungu fw-bold d-flex align-items-center"
            >
              Edit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, null)(Topbar);
