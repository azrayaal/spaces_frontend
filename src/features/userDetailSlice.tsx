import { createSlice } from "@reduxjs/toolkit";
import { DetailContentState } from "../datas/data-Redux";

const initialState: DetailContentState = {
  isLoading: false,
  isError: false,
  userDetail: [],
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
