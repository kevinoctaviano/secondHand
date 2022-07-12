import { combineReducers } from 'redux';
import auth from './auth';
import message from './message';
import user from './user';
import kategori from './kategori';
import barang from './barang';

export default combineReducers({
  auth,
  message,
  user,
  kategori,
  barang,
});
