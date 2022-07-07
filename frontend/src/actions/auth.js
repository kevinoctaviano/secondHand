import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
} from './types';

import AuthService from '../services/auth.service';

/**
 * 5. Action ini menerima argumen yang dikirimkan dari component Register seperti username, email, dan password
 *    setelah menerima argumen, fungsi ini akan mereturn function yang ada pada auth.service. Apabila berhasil
 *    maka akan mengembalikan response yang di dispatch dengan type REGISTER_SUCCESS dan SET_MESSAGE juga mengembalikan
 *    nilai promise resolve.
 *    Payload SET_MESSAGE berisikan pesan sukses yang akan di tampilkan pada component Register.
 */
export const register = (fullname, email, password) => (dispatch) => {
  return AuthService.register(fullname, email, password).then(
    (response) => {
      dispatch({
        type: REGISTER_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve();
    },
    /**
     * Apabila register gagal, maka akan diolah response errornya dan disimpan ke dalam variabel message. Variabel ini
     * nantinya akan dimasukkan ke dalam payload SET_MESSAGE lalu ditampilkan pesan errornya ke component Register.
     * Mengembalikan nilai reject pada promisenya.
     */
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const login = (email, password) => (dispatch) => {
  return AuthService.login(email, password).then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data },
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: LOGIN_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const logout = () => (dispatch) => {
  AuthService.logout();

  dispatch({
    type: LOGOUT,
  });
};
