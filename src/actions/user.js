import {
  GET_ALL_KATEGORI,
  GET_ALL_KATEGORI_USER,
  GET_KATEGORI_NULL,
  GET_WISHLIST_NULL,
  GET_USER_BY_ID,
  GET_DATA_NULL,
  GET_KATEGORI_BY_ID,
  ADD_KATEGORI,
  ADD_PRODUCT,
  UPDATE_KATEGORI,
  DELETE_KATEGORI,
  UPDATE_USER,
  CHANGE_PASSWORD_USER,
  GET_ALL_WISHLIST,
  GET_WISHLIST_BY_ID,
  ADD_WISHLIST,
  DELETE_WISHLIST,
  GET_PRODUCT_BY_ID,
  GET_PRODUCT_USER,
  GET_TAWARAN_BUYER,
  GET_TAWARAN_SELLER,
  ADD_TAWARAN,
  GET_TAWARAN_BY_ID,
  GET_DATA_BY_KATEGORI,
  GET_DATA_BY_SEARCH,
  UPDATE_PRODUCT,
  GET_NOTIFIKASI,
  ADD_STATUS_TAWARAN,
  DELETE_PRODUCT,
} from './types';
import UserService from '../services/user.service';

//Users
export const getUserByID = (dispatch) => {
  return UserService.getUserByID().then((response) => {
    dispatch({
      type: GET_USER_BY_ID,
      payload: {
        data: response.data.data,
      },
    });
  });
};
export const updateUser = (formData) => (dispatch) => {
  return UserService.updateUser(formData).then(() => {
    dispatch({
      type: UPDATE_USER,
    });
  });
};
export const changePassword = (password) => (dispatch) => {
  return UserService.changePassword(password).then(() => {
    dispatch({
      type: CHANGE_PASSWORD_USER,
    });
  });
};

// Product
export const getDataProductAllUser = (kategori, search) => (dispatch) => {
  return UserService.getDataProductAllUser(kategori, search).then(
    (response) => {
      const arrayKategori = response.data;
      if (arrayKategori.length === 0) {
        dispatch({
          type: GET_DATA_NULL,
        });
      } else {
        dispatch({
          type: GET_ALL_KATEGORI_USER,
          payload: {
            data: response.data.data,
          },
        });
      }
    }
  );
};
export const getDataProductByKategori = (kategori) => (dispatch) => {
  return UserService.getDataProductByKategori(kategori).then((response) => {
    // console.log(response.data.data);
    const arrayKategori = response.data.data;
    if (arrayKategori.length === 0) {
      dispatch({
        type: GET_DATA_NULL,
      });
    } else {
      dispatch({
        type: GET_DATA_BY_KATEGORI,
        payload: {
          data: response.data.data,
        },
      });
    }
  });
};
export const getDataBySearch = (search) => (dispatch) => {
  return UserService.getDataBySearch(search).then((response) => {
    // console.log(response.data.data);
    const arrayKategori = response.data.data;
    if (arrayKategori.length === 0) {
      dispatch({
        type: GET_DATA_NULL,
      });
    } else {
      dispatch({
        type: GET_DATA_BY_SEARCH,
        payload: {
          data: response.data.data,
        },
      });
    }
  });
};
export const getProductByID = (id) => (dispatch) => {
  return UserService.getProductByID(id).then((response) => {
    // console.log(response.data);
    dispatch({
      type: GET_PRODUCT_BY_ID,
      payload: {
        data: response.data,
      },
    });
  });
};
export const postDataProduct = (formData) => (dispatch) => {
  return UserService.postDataProduct(formData).then(() => {
    dispatch({
      type: ADD_PRODUCT,
    });
  });
};
export const updateDataProduct = (idProduct, formData) => (dispatch) => {
  return UserService.updateDataProduct(idProduct, formData).then(() => {
    dispatch({
      type: UPDATE_PRODUCT,
    });
  });
};
export const getProductUser = () => (dispatch) => {
  return UserService.getProductUser().then((response) => {
    dispatch({
      type: GET_PRODUCT_USER,
      payload: {
        data: response.data.data,
      },
    });
  });
};
export const deleteProduct = (idProduct) => (dispatch) => {
  return UserService.deleteProduct(idProduct).then((response) => {
    dispatch({
      type: DELETE_PRODUCT,
    });
  });
};

// Kategori
export const getAllKategori = (dispatch) => {
  return UserService.getAllKategori().then((response) => {
    const arrayKategori = response.data;
    if (arrayKategori.length === 0) {
      dispatch({
        type: GET_KATEGORI_NULL,
      });
    } else {
      dispatch({
        type: GET_ALL_KATEGORI,
        payload: {
          data: response.data,
        },
      });
    }
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

// wishlist
export const getAllWishlist = (dispatch) => {
  return UserService.getAllWishlist().then((response) => {
    const arrayKategori = response.data;
    if (arrayKategori.length === 0) {
      dispatch({
        type: GET_WISHLIST_NULL,
      });
    } else {
      dispatch({
        type: GET_ALL_WISHLIST,
        payload: {
          data: response.data,
        },
      });
    }
  });
};
export const getWishlistByID = (id) => (dispatch) => {
  return UserService.getWishlistByID(id).then((response) => {
    dispatch({
      type: GET_WISHLIST_BY_ID,
      payload: {
        data: response.data,
      },
    });
  });
};
export const postWishlist = (kategori) => (dispatch) => {
  return UserService.postWishlist(kategori).then(() => {
    dispatch({
      type: ADD_WISHLIST,
    });
  });
};
export const deleteWishlist = (id) => (dispatch) => {
  return UserService.deleteWishlist(id).then(() => {
    dispatch({
      type: DELETE_WISHLIST,
      payload: {
        id: id
      }
    });
  });
};

// tawaran
export const getTawaranBuyer = (dispatch) => {
  return UserService.getTawaranBuyer().then((response) => {
    dispatch({
      type: GET_TAWARAN_BUYER,
      payload: {
        data: response.data.data,
      },
    });
  });
};
export const getTawaranSeller = (dispatch) => {
  return UserService.getTawaranSeller().then((response) => {
    dispatch({
      type: GET_TAWARAN_SELLER,
      payload: {
        data: response.data.data,
      },
    });
  });
};
export const postTawaran = (idProduct, hargaTawar, status) => (dispatch) => {
  return UserService.postTawaran(idProduct, hargaTawar, status).then(() => {
    dispatch({
      type: ADD_TAWARAN,
    });
  });
};
export const postStatusTawaran = (idTawaran, tawaranStatus) => (dispatch) => {
  return UserService.postStatusTawaran(idTawaran, tawaranStatus).then(() => {
    dispatch({
      type: ADD_STATUS_TAWARAN,
    });
  });
};
export const getTawaranByID = (idTawaran) => (dispatch) => {
  return UserService.getTawaranByID(idTawaran).then((response) => {
    dispatch({
      type: GET_TAWARAN_BY_ID,
      payload: {
        data: response.data,
      },
    });
  });
};

// notifikasi
export const getNotifikasi = (dispatch) => {
  return UserService.getNotifikasi().then((response) => {
    // console.log(response);
    dispatch({
      type: GET_NOTIFIKASI,
      payload: { data: response.data.data },
    });
  });
};
