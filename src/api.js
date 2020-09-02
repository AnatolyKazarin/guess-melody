import axios from 'axios';

// const createAPI = () => {
//   const api = axios.create({
//     baseURL: `https://es31-server.appspot.com/guess-melody`,
//     timeout: 1000 * 5,
//     withCredentials: true,
//   });
//
//   return api;
// };

const api = axios.create({
  baseURL: `https://htmlacademy-react-2.appspot.com/guess-melody`,
  timeout: 1000 * 5,
  withCredentials: true,
});

export default api;
