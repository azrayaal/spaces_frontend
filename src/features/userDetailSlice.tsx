import { createAsyncThunk } from "@reduxjs/toolkit";
import { DetailContentState } from "../datas/data-Redux";

const initialState: DetailContentState = {
  isLoading: false,
  isError: false,
  userDetail: [],
};

export const fetchUserDetail = createAsyncThunk(
  "userDetail/fetchUserDetail",
  async () => {}
);
