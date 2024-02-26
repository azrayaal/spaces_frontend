import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserDetailState } from "../datas/data-Redux";
import { API } from "../libs/api";
import { DetailUserTypes } from "../datas/data-types";

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

      // console.log("payload", idUserLogin);

      try {
        const response = await API.get<UserDetailState>(`user/${idUserLogin}`);
        console.log("response.data dr redux", response.data);

        return response.data;
      } catch (error) {
        console.log("Error while fetching content:", error);
        throw error;
      }
    }
  }
);

const initialState: UserDetailState = {
  isLoading: false,
  isError: false,
  // userDetail: [],
  userDetail: {},
};

export const userDetailSlice = createSlice({
  name: "userDetail",
  initialState,
  reducers: {},
  // reducers: {
  //   setUserDetail: (state, action) => {
  //     // console.log("action paylod", action.payload);
  //     return {
  //       ...state,
  //       data: action.payload.map((i: UserFromPayloadRedux) => ({
  //         id: i.id,
  //         email: i.email,
  //         full_name: i.full_name,
  //         username: i.username,
  //         profile_picture: i.profile_picture,
  //         profile_description: i.profile_description,
  //         created_at: i.created_at,
  //         followingTotal: i.followingTotal,
  //         followerTotal: i.followerTotal,
  //       })),
  //     };
  //   },
  // },
  extraReducers: (builder) => {
    builder.addCase(fetchUserDetail.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUserDetail.fulfilled, (state, action) => {
      state.isLoading = false;

      // state.userDetail = {
      //   id: action.payload.userDetail.id,
      //   email: action.payload.userDetail.email,
      //   full_name: action.payload.userDetail.full_name,
      //   username: action.payload.userDetail.username,
      //   profile_picture: action.payload.userDetail.profile_picture,
      //   profile_description: action.payload.userDetail.profile_description,
      //   created_at: action.payload.userDetail.created_at,
      //   followingTotal: action.payload.userDetail.followingTotal,
      //   followerTotal: action.payload.userDetail.followerTotal,
      // };

      state.userDetail = action.payload;

      console.log("action.payload", action.payload);
      // console.log("state.userDetail", action.payload.userDetail.id);
      console.log("state", state.userDetail);
    });
    builder.addCase(fetchUserDetail.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
    });
  },
});

// export const { setUserDetail } = userDetailSlice.actions;

export default userDetailSlice.reducer;
