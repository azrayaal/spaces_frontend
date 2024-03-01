import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../libs/api";
import { ContentDetailState } from "../datas/data-Redux";

export const fetchContentDetail = createAsyncThunk(
  "contentDetail/fetchContentDetail",
  async (id: number) => {
    try {
      const response = await API.get(`spaces/${id}`);
      return response.data;
    } catch (error) {
      console.log("Error while fetching contentDetail:", error);
      throw error;
    }
  }
);

const initialState: ContentDetailState = {
  isLoading: false,
  isError: false,
  data: {
    id: 0,
    content: "",
    image: "",
    created_at: "",
    total_Replies: 0,
    total_Likes: 0,
    user: {
      id: 0,
      username: "",
      full_name: "",
      profile_picture: "",
    },
  },
};

const contentDetailSlice = createSlice({
  name: "contentDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchContentDetail.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchContentDetail.fulfilled, (state, action) => {
      console.log(action.payload);
      state.isLoading = false;
      state.data = action.payload;
      state.isError = false;
    });
    builder.addCase(fetchContentDetail.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export default contentDetailSlice.reducer;
