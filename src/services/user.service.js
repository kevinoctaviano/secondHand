import axios from 'axios';
import authHeader from './auth-header';

const header = { headers: authHeader(), 'Content-type': 'application/json' };

const API_URL = 'https://second-hand-backend.herokuapp.com/';

// kategori
const getAllKategori = () => {
  return axios.get(API_URL + 'kategori', { headers: authHeader() });
};
const deleteKategori = (id) => {
  return axios.delete(API_URL + `kategori/${id}`, { headers: authHeader() });
};
const getKategoriByID = (id) => {
  return axios.get(API_URL + `kategori/${id}`, { headers: authHeader() });
};
const postKategori = (namaKategori) => {
  return axios.post(API_URL + 'kategori', { namaKategori }, header);
};
const updateKategori = (namaKategori, id) => {
  return axios.put(API_URL + `kategori/${id}`, { namaKategori }, header);
};

// product
const getDataBySearch = async (search) => {
  return await axios.get(
    API_URL + `Product?kategori=&q=${search}&pageNo=0&pageSize=24`
  );
};
const getDataProductByKategori = async (kategori) => {
  return await axios.get(
    API_URL + `Product?kategori=${kategori}&q=&pageNo=0&pageSize=24`
  );
};
const getDataProductAllUser = async (kategori, search) => {
  return await axios.get(
    API_URL + `Product?kategori=${kategori}&q=${search}&pageNo=0&pageSize=24`,
    { headers: authHeader() }
  );
};
const postDataProduct = async (data) => {
  return await axios.post(API_URL + 'Product', data, {
    headers: authHeader(),
  });
};
const getProductByID = async (idProduct) => {
  return await axios.get(API_URL + `Product/${idProduct}`, {
    headers: authHeader(),
  });
};
const getProductUser = async () => {
  return await axios.get(API_URL + 'product-user', { headers: authHeader() });
};
const updateDataProduct = (idProduct, data) => {
  return axios.put(API_URL + `Product/${idProduct}`, data, {
    headers: authHeader(),
  });
};
const deleteProduct = (idProduct) => {
  return axios.delete(API_URL + `Product/${idProduct}`, {
    headers: authHeader(),
  });
};

// users
const getUserByID = () => {
  return axios.get(API_URL + 'Users', { headers: authHeader() });
};
const updateUser = (data) => {
  return axios.put(API_URL + 'Users', data, {
    headers: authHeader(),
  });
};
const changePassword = (data) => {
  return axios.put(API_URL + 'Users', { data }, header);
};

// wishlist
const getAllWishlist = () => {
  return axios.get(API_URL + 'wishlist', { headers: authHeader() });
};
const getWishlistByID = (id) => {
  return axios.get(API_URL + `wishlist/${id}`, { headers: authHeader() });
};
const postWishlist = (idProduct) => {
  return axios.post(
    API_URL + 'wishlist',
    { idProduct },
    { headers: authHeader() }
  );
};
const deleteWishlist = (id) => {
  return axios.delete(API_URL + `wishlist/${id}`, { headers: authHeader() });
};

// tawaran
const getTawaranBuyer = () => {
  return axios.get(API_URL + 'tawaran-buyer', { headers: authHeader() });
};
const getTawaranSeller = () => {
  return axios.get(API_URL + 'tawaran-seller', { headers: authHeader() });
};
const postTawaran = (idProduct, hargaTawar, status) => {
  return axios.post(
    API_URL + `tawaran/${idProduct}`,
    {
      hargaTawaran: hargaTawar,
      statutsTawaran: status,
    },
    {
      headers: authHeader(),
    }
  );
};
const getTawaranByID = (idTawaran) => {
  return axios.post(API_URL + `tawaran/${idTawaran}`, {
    headers: authHeader(),
  });
};
const postStatusTawaran = (idTawaran, statutsTawaran) => {
  return axios.put(
    API_URL + `tawaran/${idTawaran}`,
    {
      statutsTawaran,
    },
    {
      headers: authHeader(),
    }
  );
};

// notifikasi
const getNotifikasi = () => {
  return axios.get(API_URL + 'notfikasi', {
    headers: authHeader(),
  });
};

// eslint-disable-next-line
export default {
  postStatusTawaran,
  deleteProduct,
  getDataProductAllUser,
  getTawaranBuyer,
  getNotifikasi,
  getDataBySearch,
  getTawaranSeller,
  getTawaranByID,
  postTawaran,
  getProductUser,
  getProductByID,
  getAllKategori,
  getAllWishlist,
  getKategoriByID,
  getWishlistByID,
  getDataProductByKategori,
  postKategori,
  getUserByID,
  updateUser,
  updateKategori,
  deleteKategori,
  changePassword,
  postDataProduct,
  postWishlist,
  deleteWishlist,
  updateDataProduct,
};
