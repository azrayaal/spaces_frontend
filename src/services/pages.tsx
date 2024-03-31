import { API } from "../libs/api";

export async function getHome() {
  try {
    const response = await API.get("spaces");
    // return response.data;
    const axiosResponse = response.data;
    return axiosResponse.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
