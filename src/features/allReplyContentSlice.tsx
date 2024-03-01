import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../libs/api";
import { AllReplyContentState } from "../datas/data-Redux";

export const fetchAllReplyContent = createAsyncThunk(
  "allReplyContent/fetchAllReplyContent",
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

const initialStateReply: AllReplyContentState = {
  isLoading: false,
  isError: false,
  data: [],
};

const allReplyContentSlice = createSlice({
  name: "allContentReply",
  initialState: initialStateReply,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllReplyContent.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllReplyContent.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isError = false;
    });
    builder.addCase(fetchAllReplyContent.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export default allReplyContentSlice.reducer;
