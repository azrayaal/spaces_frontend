import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { UserDetailState } from "../datas/data-Redux";
import { API } from "../libs/api";
import {
  DetailUserTypes,
  UserFromPayload,
  UserFromPayloadRedux,
} from "../datas/data-types";

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
        const response = await API.get<UserDetailState>(`user/${idUserLogin}`);

        return response.data;
      } catch (error) {
        console.log("Error while fetching content:", error);
        throw error;
      }
    }
  }
);

export interface UserDetailState {
  // isLoading: boolean;
  // isError: boolean;
  // userDetail: WritableDraft<UserFromPayloadRedux>;
  userDetail: UserFromPayloadRedux;
  // userDetail: UserFromPayload;
}

const initialState: UserDetailState = {
  // isLoading: false,
  // isError: false,
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
  // reducers: {},
  // reducers: {
  //   setUserDetail: (state, action) => {
  //     return {
  //       ...state,
  //       userDetail: action.payload,
  //     };
  //     // state.userDetail = action.payload;
  //     // state.userDetail.id = action.payload.id;
  //     // state.userDetail.email = action.payload.email;
  //     // state.userDetail.full_name = action.payload.full_name;
  //     // state.userDetail.username = action.payload.username;
  //     // state.userDetail.profile_picture = action.payload.profile_picture;
  //     // state.userDetail.profile_description = action.payload.profile_description;
  //     // state.userDetail.created_at = action.payload.created_at;
  //     // state.userDetail.followingTotal = action.payload.followingTotal;
  //     // state.userDetail.followerTotal = action.payload.followerTotal;
  //   },
  //   // extraReducers: (builder) => {
  //   //   builder.addCase(fetchUserDetail.pending, (state) => {
  //   //     state.isLoading = true;
  //   //   });
  //   //   builder.addCase(fetchUserDetail.fulfilled, (state, action) => {
  //   //     state.isLoading = false;

  //   //     // state.userDetail = {
  //   //     //   id: action.payload.userDetail.id,
  //   //     //   email: action.payload.userDetail.email,
  //   //     //   full_name: action.payload.userDetail.full_name,
  //   //     //   username: action.payload.userDetail.username,
  //   //     //   profile_picture: action.payload.userDetail.profile_picture,
  //   //     //   profile_description: action.payload.userDetail.profile_description,
  //   //     //   created_at: action.payload.userDetail.created_at,
  //   //     //   followingTotal: action.payload.userDetail.followingTotal,
  //   //     //   followerTotal: action.payload.userDetail.followerTotal,
  //   //     // };

  //   //     state.userDetail = action.payload;
  //   //   });
  //   //   builder.addCase(fetchUserDetail.rejected, (state) => {
  //   //     state.isError = true;
  //   //     state.isLoading = false;
  //   //   });
  //   // },
  // },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserDetail.fulfilled, (state, action) => {
      state.userDetail = action.payload;
      // state.userDetail.id = action.payload?.userDetail.id;
      // state.userDetail.email = action.payload?.userDetail.email;
      // state.userDetail.full_name = action.payload?.userDetail.full_name;
      // state.userDetail.username = action.payload?.userDetail.username;
      // state.userDetail.email = action.payload?.userDetail.email;
      // state.userDetail.profile_picture =
      //   action.payload?.userDetail.profile_picture;
      // state.userDetail.profile_description =
      //   action.payload?.userDetail.profile_description;
      // state.userDetail.followingTotal =
      //   action.payload?.userDetail.followingTotal;
      // state.userDetail.followerTotal = action.payload?.userDetail.followerTotal;
    });
  },
});

// export const { setUserDetail } = userDetailSlice.actions;
export default userDetailSlice.reducer;
