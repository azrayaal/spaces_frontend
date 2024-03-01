import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../libs/api";
// import { checkLogin } from "../../hooks";

export default function fetchContent() {
  // export default function fetchSuggest() {
  //   const { isLogin } = checkLogin();

  //   createAsyncThunk("suggest/fetchSuggest", async () => {
  createAsyncThunk("content/fetchContent", async () => {
    try {
      //   if (isLogin) {
      //     const response = await API_Header.get("suggestion");
      //     return response.data;
      //   }

      const response = await API.get("spaces");
      return response;
    } catch (error) {
      console.log("Error while fetching content:", error);
      throw error;
    }
  });
}
