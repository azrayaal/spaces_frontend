import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "../features/contentSlice";
import userDetailReducer from "../features/userDetailSlice";
import suggestsReducer from "../features/suggestSlice";
import detailContentReducer from "../features/contentDetailSlice";
import allReplyContentReducer from "../features/allReplyContentSlice";
import allFollowingReducer from "../features/following";
import allFollowerReducer from "../features/follower";

export const store = configureStore({
  reducer: {
    content: contentReducer,
    userDetail: userDetailReducer,
    suggests: suggestsReducer,
    contentDetail: detailContentReducer,
    allReplyContent: allReplyContentReducer,
    allFollowing: allFollowingReducer,
    allFollower: allFollowerReducer,
  },
});
