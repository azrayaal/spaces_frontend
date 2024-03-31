import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_Header } from "../libs/api";
import { FollowerState } from "../datas/data-Redux";

export const fetchOtherFollower = createAsyncThunk(
  "allFollower/fetchAllFollower",
  async (id: number) => {
    try {
      const response = await API_Header.get(`follower/${id}`);
      // console.log(response);
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

const allOtherFollowerSlice = createSlice({
  name: "allFollower",
  initialState: initialStateReply,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOtherFollower.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchOtherFollower.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isError = false;
    });
    builder.addCase(fetchOtherFollower.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export default allOtherFollowerSlice.reducer;
