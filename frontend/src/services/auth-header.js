export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));

  return { Authorization: 'Bearer ' + user.data.accessToken };

  // for Node.js Express back-end
  // return { "x-access-token": user.accessToken };
}
