import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_Header } from "../libs/api";
import { SuggestState } from "../datas/data-Redux";
import Cookies from "js-cookie";

export const fetchSuggest = createAsyncThunk(
  "suggest/fetchSuggest",
  async () => {
    const token = Cookies.get("token");
    if (token) {
      try {
        const response = await API_Header.get("suggestion");
        return response.data;
      } catch (error) {
        console.log("Error while fetching content:", error);
        throw error;
      }
    }
  }
);

const initialState: SuggestState = {
  isLoading: false,
  isError: false,
  data: [],
};

const suggestSlice = createSlice({
  name: "suggests",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSuggest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchSuggest.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isError = false;
    });
    builder.addCase(fetchSuggest.rejected, (state) => {
      state.isError = true;
      state.data = [];
      state.isLoading = false;
    });
  },
});

export default suggestSlice.reducer;
