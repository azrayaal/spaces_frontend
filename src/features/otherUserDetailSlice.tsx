import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../libs/api";
import { UserFromPayloadRedux } from "../datas/data-types";

export const fetchOtherUserDetail = createAsyncThunk(
  "userDetail/fetchOtherUserDetail",
  async (id: number) => {
    try {
      const response = await API.get<UserFromPayloadRedux>(`user/${id}`);

      return response.data;
    } catch (error) {
      console.log("Error while fetching content:", error);
      throw error;
    }
  }
);

export interface UserDetailState {
  isLoading: boolean;
  isError: boolean;
  userDetail: UserFromPayloadRedux;
}

const initialState: UserDetailState = {
  isLoading: false,
  isError: false,
  userDetail: {
    id: 0,
    email: "",
    full_name: "",
    username: "",
    profile_picture: "",
    profile_description: "",
    created_at: "",
    header: "",
    followingTotal: 0,
    followerTotal: 0,
  },
};

export const OtherUserDetailSlice = createSlice({
  name: "userDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOtherUserDetail.fulfilled, (state, action) => {
      state.userDetail = action.payload;
    });
  },
});

// export const { setUserDetail } = userDetailSlice.actions;
export default OtherUserDetailSlice.reducer;
