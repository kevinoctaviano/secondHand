import { combineReducers } from 'redux';
import auth from './auth';
import message from './message';
import user from './user';
import kategori from './kategori';

export default combineReducers({
  auth,
  message,
  user,
  kategori,
});
