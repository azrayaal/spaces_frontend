// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { checkLogin } from "../hooks";
// import { API_Header } from "../../libs/api";

// export default function fetchSuggest() {
//   const { isLogin } = checkLogin();

//   createAsyncThunk("suggest/fetchSuggest", async () => {
//     try {
//       if (isLogin) {
//         const response = await API_Header.get("suggestion");
//         return response.data;
//       }
//     } catch (error) {
//       console.log("Error while fetching content:", error);
//       throw error;
//     }
//   });
//   return <></>;
// }
