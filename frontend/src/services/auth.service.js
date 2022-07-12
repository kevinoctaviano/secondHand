import axios from 'axios';

const API_URL = 'https://second-hand-backend.herokuapp.com/';

/**
 * 6. Ini merupakan function untuk melakukan HTTP Request POST untuk menambahkan username, email, dan password
 *    user baru menuju API yang sudah dibuat.
 */
const register = (fullName, username, email, password) => {
  return axios.post(API_URL + 'signup', {
    fullName: fullName,
    username: username,
    email: email,
    password: password,
  });
};

const login = (formData) => {
  return axios.post(API_URL + 'signin', formData).then((response) => {
    // console.log(response.data);
    if (response.data.data.accessToken) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
  });
};

const logout = () => {
  localStorage.removeItem('user');
};

// eslint-disable-next-line
export default {
  register,
  login,
  logout,
};
