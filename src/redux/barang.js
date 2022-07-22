import {
  GET_DATA_NULL,
  ADD_PRODUCT,
  GET_PRODUCT_BY_ID,
  GET_PRODUCT_USER,
  GET_DATA_BY_KATEGORI,
  GET_DATA_BY_SEARCH,
  GET_ALL_KATEGORI_USER,
  DELETE_PRODUCT,
} from '../actions/types';
const initialState = {
  isNull: true,
  barangUser: [],
  barangKategori: [],
  barangKategoriUser: [],
  message: null,
};

const barang = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_PRODUCT_BY_ID:
      return {
        ...state,
        isNull: false,
        barangKategori: payload.data,
        message: null,
      };
    case GET_PRODUCT_USER:
      return {
        ...state,
        isNull: false,
        barangUser: payload.data,
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
    case GET_DATA_BY_KATEGORI:
      return {
        ...state,
        isNull: false,
        barangKategori: payload.data,
        message: null,
      };
    case GET_ALL_KATEGORI_USER:
      return {
        ...state,
        isNull: false,
        barangKategoriUser: payload.data,
        message: null,
      };
    case GET_DATA_BY_SEARCH:
      return {
        ...state,
        isNull: false,
        barangKategori: payload.data,
        message: null,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        isNull: false,
        message: 'Berhasil hapus data product',
      };
    default:
      return state;
  }
};

export default barang;
