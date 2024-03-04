import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_Header } from "../libs/api";
import { FollowState } from "../datas/data-Redux";

export const fetchFollow = createAsyncThunk(
  "allFollow/fetchAllFollow",
  async () => {
    try {
      const response = await API_Header.get(`following`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log("Error while fetching contentDetail:", error);
      throw error;
    }
  }
);

const initialStateReply: FollowState = {
  isLoading: false,
  isError: false,
  data: [],
};

const allFollowSlice = createSlice({
  name: "allFollow",
  initialState: initialStateReply,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFollow.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchFollow.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isError = false;
    });
    builder.addCase(fetchFollow.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export default allFollowSlice.reducer;
