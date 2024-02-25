import { createSlice } from "@reduxjs/toolkit";
import { UserDetailState } from "../datas/data-Redux";

const initialState: UserDetailState = {
  isLoading: false,
  isError: false,
  // userDetail: [],
  userDetail: {
    id: 0,
    email: "",
    full_name: "",
    username: "",
    profile_picture: "",
    profile_description: "",
    created_at: "",
    followingTotal: 0,
    followerTotal: 0,
  },
};

export const userDetailSlice = createSlice({
  name: "userDetail",
  initialState,
  reducers: {
    setUserDetail: (state, action) => {
      state.userDetail = action.payload;
      state.isLoading = false;
      state.isError = false;
    },
    setLoading: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    setRejected: (state) => {
      state.isError = true;
      state.isLoading = false;
    },
  },
});

export const { setUserDetail, setLoading, setRejected } =
  userDetailSlice.actions;
export default userDetailSlice.reducer;
