import { GET_ALL_DATA } from '../actions/types';
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

    default:
      return state;
  }
};

export default barang;
