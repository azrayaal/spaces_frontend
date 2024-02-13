import axios from "axios";

// const API = () => {
//   // axios instance for making requests
//   const axiosInstance = axios.create({
//     baseURL: `http://localhost:3000/api/v1/`,
//   });

//   return axiosInstance;
// };

const API = axios.create({
  baseURL: `http://localhost:3000/api/v1/`,
});

//   return axiosInstance;

export default API;
