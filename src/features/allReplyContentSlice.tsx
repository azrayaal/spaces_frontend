import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../libs/api";
import { AllReplyContentState } from "../datas/data-Redux";
import { ReplyContent } from "../datas/data-types";

export const fetchAllReplyContent = createAsyncThunk(
  "allReplyContent/fetchAllReplyContent",
  async (id: number) => {
    try {
      const response = await API.get(`replies/${id}`);
      console.log(response);
      return response.data;
    } catch (error) {
      console.log("Error while fetching contentDetail:", error);
      throw error;
    }
  }
);

const initialReply: ReplyContent[] = [
  {
    id: 1,
    content: "Some content",
    image: "image_url",
    created_at: "2024-03-31",
    user: {
      id: 1,
      username: "username",
      full_name: "Full Name",
      profile_picture: "profile_picture_url",
    },
  },
];

const initialStateReply: AllReplyContentState = {
  isLoading: false,
  isError: false,
  data: {
    reply: initialReply,
    total_replies: 0,
  },
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
      console.log(action.payload);
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
