// import axios from "axios";
// import Cookies from "js-cookie";

// const token = Cookies.get("token");
// const jwtToken = token ? atob(token) : null;

// const headers = {
//   Authorization: `Bearer ${jwtToken}`,
//   "Content-type": "multipart/form-data",
// };

// const API = axios.create({
//   baseURL: `http://localhost:3000/api/v1/`,
// });

// const APIPOST = axios.create({
//   baseURL: `http://localhost:3000/api/v1/`,
//   headers,
// });

// export default API;
// APIPOST;

import axios, { AxiosInstance } from "axios";
import Cookies from "js-cookie";

// Retrieve token from Cookies
const token = Cookies.get("token");
const jwtToken = token ? atob(token) : null;

// Define headers with Authorization token
const headers = {
  Authorization: `Bearer ${jwtToken}`,
  "Content-type": "multipart/form-data",
};

// Create Axios instance for general requests (API)
const API: AxiosInstance = axios.create({
  baseURL: `http://localhost:3000/api/v1/`,
  // "Content-type": "application/json; charset=utf-8",
});

// Create Axios instance with custom headers for authorized requests (APIPOST)
const APIPOST: AxiosInstance = axios.create({
  baseURL: `http://localhost:3000/api/v1/`,
  headers,
});

// Export both API and APIPOST
export { API, APIPOST };
