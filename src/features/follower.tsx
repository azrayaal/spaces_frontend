import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_Header } from "../libs/api";
import { FollowerState } from "../datas/data-Redux";

export const fetchFollower = createAsyncThunk(
  "allFollower/fetchAllFollower",
  async () => {
    try {
      const response = await API_Header.get(`follower`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log("Error while fetching contentDetail:", error);
      throw error;
    }
  }
);

const initialStateReply: FollowerState = {
  isLoading: false,
  isError: false,
  data: [],
};

const allFollowerSlice = createSlice({
  name: "allFollower",
  initialState: initialStateReply,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFollower.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchFollower.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isError = false;
    });
    builder.addCase(fetchFollower.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export default allFollowerSlice.reducer;
