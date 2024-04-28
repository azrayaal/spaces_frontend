import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../libs/api";
import { DetailUserTypes, UserFromPayloadRedux } from "../datas/data-types";

import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

export const fetchUserDetail = createAsyncThunk(
  "userDetail/fetchUserDetail",
  async () => {
    const token = Cookies.get("token");
    if (token) {
      const jwtToken = atob(token);
      const payload: DetailUserTypes = jwtDecode(jwtToken);
      const idUserLogin = payload.user.id;

      try {
        const response = await API.get<UserFromPayloadRedux>(
          `user/${idUserLogin}`
        );

        return response.data;
      } catch (error) {
        console.log("Error while fetching content:", error);
        throw error;
      }
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
  // userDetail: null,
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

export const userDetailSlice = createSlice({
  name: "userDetail",
  initialState,
  reducers: {
    // Add a reducer case to handle removing user detail
    removeUserDetail: (state) => {
      state.userDetail = initialState.userDetail;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserDetail.fulfilled, (state, action) => {
      state.userDetail = action.payload;
    });
  },
});

// export const { setUserDetail } = userDetailSlice.actions;
export default userDetailSlice.reducer;
