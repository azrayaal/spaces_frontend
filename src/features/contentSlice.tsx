import { createSlice } from "@reduxjs/toolkit";
import { DataContentTypes } from "../datas/data-types";

interface ContentState {
  isLoading: boolean;
  isError: boolean;
  data: any;
}
const initialState: ContentState = {
  isLoading: false,
  isError: false,
  data: [],
};

const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    setContent: (state, action) => {
      console.log("action paylod", action.payload);
      return {
        ...state,
        data: action.payload.map((i: DataContentTypes) => ({
          id: i.id,
          content: i.content,
          image: i.image,
          created_at: i.created_at,
          Total_Likes: i.Total_Likes,
          Total_Replies: i.Total_Replies,
          user: {
            full_name: i.user.full_name,
            username: i.user.username,
            profile_picture: i.user.profile_picture,
            id: i.id,
          },
        })),
      };
    },
  },
});

export const { setContent } = contentSlice.actions;
export default contentSlice.reducer;
