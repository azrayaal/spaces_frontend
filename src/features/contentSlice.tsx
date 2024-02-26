import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DataContentTypes } from "../datas/data-types";
import { API } from "../libs/api";
import { ContentState } from "../datas/data-Redux";

export const fetchContent = createAsyncThunk(
  "content/fetchContent",
  async () => {
    try {
      const response = await API.get<DataContentTypes[]>("spaces");
      return response.data;
    } catch (error) {
      console.log("Error while fetching content:", error);
      throw error;
    }
  }
);

const initialState: ContentState = {
  isLoading: false,
  isError: false,
  contents: [],
};

const contentSlice = createSlice({
  name: "content",
  initialState,
  // reducers: {
  //   setContent: (state, action) => {
  //     // console.log("action paylod", action.payload);
  //     return {
  //       ...state,
  //       data: action.payload.map((i: DataContentTypes) => ({
  //         id: i.id,
  //         content: i.content,
  //         image: i.image,
  //         created_at: i.created_at,
  //         Total_Likes: i.Total_Likes,
  //         Total_Replies: i.Total_Replies,
  //         user: {
  //           full_name: i.user.full_name,
  //           username: i.user.username,
  //           profile_picture: i.user.profile_picture,
  //           id: i.id,
  //         },
  //       })),
  //     };
  //   },
  // },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchContent.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchContent.fulfilled, (state, action) => {
      // console.log("action payload", action.payload);
      state.isLoading = false;
      state.contents = action.payload;
      state.isError = false;
    });
    builder.addCase(fetchContent.rejected, (state) => {
      state.isError = true;
      state.contents = [];
      state.isLoading = false;
    });
  },
});

export default contentSlice.reducer;
