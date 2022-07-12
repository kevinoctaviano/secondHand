import {
  GET_ALL_KATEGORI,
  GET_KATEGORI_BY_ID,
  UPDATE_KATEGORI,
  ADD_KATEGORI,
} from '../actions/types';
const initialState = { isNull: true, kategori: [], message: null };

const kategori = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_KATEGORI:
      return {
        ...state,
        isNull: false,
        kategori: payload.data,
        message: null,
      };

    case GET_KATEGORI_BY_ID:
      return {
        ...state,
        isNull: false,
        kategori: payload.data,
        message: null,
      };

    case ADD_KATEGORI:
      return {
        ...state,
        isNull: false,
        message: 'Berhasil Tambah Data Kategori',
      };

    case UPDATE_KATEGORI:
      return {
        ...state,
        isNull: false,
        message: 'Berhasil Ubah Data Kategori',
      };

    default:
      return state;
  }
};

export default kategori;
