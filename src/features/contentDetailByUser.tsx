import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../libs/api";
import { ContentState } from "../datas/data-Redux";

export const fetchAllContentByUser = createAsyncThunk(
  "allContentByUser/fetchAllContentByUser",
  async (id: number) => {
    try {
      const response = await API.get(`replies/${id}`);
      return response.data;
    } catch (error) {
      console.log("Error while fetching contentDetail:", error);
      throw error;
    }
  }
);

const initialStateReply: ContentState = {
  isLoading: false,
  isError: false,
  data: [],
};

const allReplyContentSlice = createSlice({
  name: "allContentByUser",
  initialState: initialStateReply,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllContentByUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllContentByUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isError = false;
    });
    builder.addCase(fetchAllContentByUser.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export default allReplyContentSlice.reducer;
