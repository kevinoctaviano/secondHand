import {
  GET_ALL_DATA,
  GET_DATA_NULL,
  ADD_PRODUCT,
  GET_PRODUCT_BY_ID,
  GET_PRODUCT_USER,
} from '../actions/types';
const initialState = { isNull: true, barang: [], message: null };

const barang = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_DATA:
      return {
        ...state,
        isNull: false,
        barang: payload.data,
        message: null,
      };
    case GET_PRODUCT_BY_ID:
      return {
        ...state,
        isNull: false,
        barang: payload.data,
        message: null,
      };
    case GET_PRODUCT_USER:
      return {
        ...state,
        isNull: false,
        barang: payload.data,
        message: null,
      };
    case GET_DATA_NULL:
      return {
        ...state,
        isNull: true,
        message: 'Belum Ada Data Barang',
      };
    case ADD_PRODUCT:
      return {
        ...state,
        isNull: false,
        message: 'Berhasil Menambahkan Data Barang',
      };
    default:
      return state;
  }
};

export default barang;
