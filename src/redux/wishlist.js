import {
  ADD_WISHLIST,
  DELETE_WISHLIST,
  GET_ALL_WISHLIST,
  GET_WISHLIST_BY_ID,
} from '../actions/types';
const initialState = { isNull: true, wishlist: [], message: null };

const wishlist = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_WISHLIST:
      return {
        ...state,
        isNull: false,
        message: 'Berhasil menambahkan wishlist',
      };
    case DELETE_WISHLIST:
      return {
        ...state,
        isNull: true,
        wishlist: state.wishlist.filter((item) => item.wishlistId !== payload.id),
        message: 'Berhasil menghapus data wishlist',
      };
    case GET_ALL_WISHLIST:
      return {
        ...state,
        isNull: false,
        wishlist: payload.data,
        message: null,
      };
    case GET_WISHLIST_BY_ID:
      return {
        ...state,
        isNull: false,
        wishlist: payload.data,
        message: null,
      };
    default:
      return state;
  }
};

export default wishlist;
