import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("token");
const jwtToken = token ? atob(token) : null;

const API = axios.create({
  baseURL: `http://localhost:3000/api/v1/`,
});

export default API;
