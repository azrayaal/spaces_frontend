import axios from "axios";
// import "dotenv/config";

// const ROOT_API = process.env.PUBLIC_API;
// const ROOT_API = `http://localhost:3000`;

export async function getHome() {
  try {
    const response = await axios.get("http://localhost:3000/api/v1/spaces");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
