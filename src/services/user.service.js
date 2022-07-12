import axios from 'axios';
import authHeader from './auth-header';

const header = { headers: authHeader(), 'Content-type': 'application/json' };

const API_URL = 'https://second-hand-backend.herokuapp.com/';

const getAllDataProduct = () => {
  return axios.get(API_URL + 'Product?kategori=&q=&pageNo=0&pageSize=20');
};

const getAllKategori = () => {
  return axios.get(API_URL + 'kategori', { headers: authHeader() });
};

const getKategoriByID = (id) => {
  return axios.get(API_URL + `kategori/${id}`, { headers: authHeader() });
};

const getUserByID = (id) => {
  return axios.get(API_URL + `Users/${id}`, { headers: authHeader() });
};

const postKategori = (namaKategori) => {
  return axios.post(API_URL + 'kategori', { namaKategori }, header);
};

const updateKategori = (namaKategori, id) => {
  return axios.put(API_URL + `kategori/${id}`, { namaKategori }, header);
};

// const getUserBoard = () => {
//   return axios.get(API_URL + 'user', { headers: authHeader() });
// };

// const getModeratorBoard = () => {
//   return axios.get(API_URL + 'mod', { headers: authHeader() });
// };

// const getAdminBoard = () => {
//   return axios.get(API_URL + 'admin', { headers: authHeader() });
// };

export default {
  getAllDataProduct,
  getAllKategori,
  getKategoriByID,
  postKategori,
  getUserByID,
  updateKategori,
  // getUserBoard,
  // getModeratorBoard,
  // getAdminBoard,
};
