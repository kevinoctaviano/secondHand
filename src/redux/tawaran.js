import {
  ADD_TAWARAN,
  GET_TAWARAN_BUYER,
  GET_TAWARAN_SELLER,
  GET_TAWARAN_BY_ID,
} from '../actions/types';
const initialState = {
  isNull: true,
  tawaran: [],
  tawaranBuyer: [],
  message: null,
};

const tawaran = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TAWARAN:
      return {
        ...state,
        isNull: false,
        message: 'Berhasil',
      };
    case GET_TAWARAN_BUYER:
      return {
        ...state,
        isNull: false,
        tawaranBuyer: payload.data,
        message: null,
      };
    case GET_TAWARAN_SELLER:
      return {
        ...state,
        isNull: false,
        tawaran: payload.data,
        message: null,
      };
    case GET_TAWARAN_BY_ID:
      return {
        ...state,
        isNull: false,
        tawaran: payload.data,
        message: null,
      };
    default:
      return state;
  }
};

export default tawaran;
