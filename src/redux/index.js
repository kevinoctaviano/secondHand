import { combineReducers } from 'redux';
import auth from './auth';
import message from './message';
import user from './user';
import kategori from './kategori';
import barang from './barang';
import wishlist from './wishlist';
import tawaran from './tawaran';

export default combineReducers({
  auth,
  message,
  user,
  kategori,
  barang,
  wishlist,
  tawaran,
});
