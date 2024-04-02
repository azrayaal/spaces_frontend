import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../libs/api";
import { SuggestState } from "../datas/data-Redux";

export const fetchAllUser = createAsyncThunk(
  "suggest/fetchAllUser",
  async () => {
    try {
      const response = await API.get("user");
      return response.data;
    } catch (error) {
      console.log("Error while fetching all user:", error);
      throw error;
    }
  }
);

const initialState: SuggestState = {
  isLoading: false,
  isError: false,
  data: [],
};

const allUserSlice = createSlice({
  name: "suggests",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isError = false;
    });
    builder.addCase(fetchAllUser.rejected, (state) => {
      state.isError = true;
      state.data = [];
      state.isLoading = false;
    });
  },
});

export default allUserSlice.reducer;
