import {
  GET_ALL_KATEGORI,
  GET_KATEGORI_BY_ID,
  GET_ALL_KATEGORI_FAILED,
  ADD_KATEGORI,
  UPDATE_KATEGORI,
} from './types';
import UserService from '../services/user.service';

export const getAllDataProduct = () => {
  return UserService.getAllDataProduct();
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

export const updateKategori = (kategori, id) => (dispatch) => {
  return UserService.updateKategori(kategori, id).then(() => {
    dispatch({
      type: UPDATE_KATEGORI,
    });
  });
};
