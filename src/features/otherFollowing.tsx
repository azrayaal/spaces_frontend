import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_Header } from "../libs/api";
import { FollowingState } from "../datas/data-Redux";

export const fetchOtherFollowing = createAsyncThunk(
  "allFollowing/fetchAllFollowing",
  async (id: number) => {
    try {
      const response = await API_Header.get(`following/${id}`);
      // console.log(response);
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

const allOtherFollowingSlice = createSlice({
  name: "allFollowing",
  initialState: initialStateReply,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOtherFollowing.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchOtherFollowing.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isError = false;
    });
    builder.addCase(fetchOtherFollowing.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export default allOtherFollowingSlice.reducer;
