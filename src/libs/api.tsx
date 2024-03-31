import axios, { AxiosInstance } from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("token");
const jwtToken = token ? atob(token) : null;

const API: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_PUBLIC_API + `/api/v1/`,
});

const API_Header: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_PUBLIC_API + `/api/v1/`,
  headers: {
    Authorization: `Bearer ${jwtToken}`,
    "Content-type": "multipart/form-data",
  },
});

export { API, API_Header };
