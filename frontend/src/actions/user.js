import UserService from '../services/user.service';

export const getAllDataProduct = () => {
  return UserService.getAllDataProduct();
};

export const getAllKategori = () => {
  return UserService.getAllKategori();
};

export const getUserByID = () => {
  return UserService.getUserByID();
};

export const postKategori = (kategori) => {
  return UserService.postKategori(kategori);
};
