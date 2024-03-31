import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DataContentTypes } from "../datas/data-types";
import { API } from "../libs/api";
import { ContentState } from "../datas/data-Redux";

export const fetchContent = createAsyncThunk(
  "content/fetchContent",
  async () => {
    try {
      const response = await API.get<DataContentTypes[]>("spaces");
      // console.log(response);
      return response.data;
    } catch (error) {
      console.log("Error while fetching content:", error);
      throw error;
    }
  }
);

const initialState: ContentState = {
  isLoading: false,
  isError: false,
  data: [],
};

const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchContent.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchContent.fulfilled, (state, action) => {
      // console.log("action payload", action.payload);
      state.isLoading = false;
      state.data = action.payload;
      state.isError = false;
    });
    builder.addCase(fetchContent.rejected, (state) => {
      state.isError = true;
      state.data = [];
      state.isLoading = false;
    });
  },
});

export default contentSlice.reducer;
