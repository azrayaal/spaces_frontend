import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_Header } from "../libs/api";
import { FollowingState } from "../datas/data-Redux";

export const fetchFollowing = createAsyncThunk(
  "allFollowing/fetchAllFollowing",
  async () => {
    try {
      const response = await API_Header.get(`following`);
      // console.log(response.data);
      return response.data;
    } catch (error) {
      console.log("Error while fetching contentDetail:", error);
      throw error;
    }
  }
);

const initialStateReply: FollowingState = {
  isLoading: false,
  isError: false,
  data: [],
};

const allFollowingSlice = createSlice({
  name: "allFollowing",
  initialState: initialStateReply,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFollowing.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchFollowing.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isError = false;
    });
    builder.addCase(fetchFollowing.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export default allFollowingSlice.reducer;
