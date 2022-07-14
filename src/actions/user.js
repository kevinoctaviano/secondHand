import {
  GET_ALL_KATEGORI,
  GET_KATEGORI_BY_ID,
  ADD_KATEGORI,
  UPDATE_KATEGORI,
  GET_ALL_DATA,
  DELETE_KATEGORI,
} from './types';
import UserService from '../services/user.service';

export const getAllDataProduct = (dispatch) => {
  return UserService.getAllDataProduct().then((response) => {
    // console.log(response.data.data);
    dispatch({
      type: GET_ALL_DATA,
      payload: {
        data: response.data.data,
      },
    });
  });
};

export const getAllKategori = (dispatch) => {
  return UserService.getAllKategori().then((response) => {
    dispatch({
      type: GET_ALL_KATEGORI,
      payload: {
        data: response.data,
      },
    });
  });
};

export const getKategoriByID = (id) => (dispatch) => {
  return UserService.getKategoriByID(id).then((response) => {
    dispatch({
      type: GET_KATEGORI_BY_ID,
      payload: {
        data: response.data,
      },
    });
  });
};

export const getUserByID = () => {
  return UserService.getUserByID();
};

export const postKategori = (kategori) => (dispatch) => {
  return UserService.postKategori(kategori).then(() => {
    dispatch({
      type: ADD_KATEGORI,
    });
  });
};

export const deleteKategori = (id) => (dispatch) => {
  return UserService.deleteKategori(id).then(() => {
    dispatch({
      type: DELETE_KATEGORI,
    });
  });
};

export const updateKategori = (kategori, id) => (dispatch) => {
  return UserService.updateKategori(kategori, id).then(() => {
    dispatch({
      type: UPDATE_KATEGORI,
    });
  });
};
