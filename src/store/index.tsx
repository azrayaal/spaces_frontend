import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "../features/contentSlice";
import userDetailReducer from "../features/userDetailSlice";
import OtherUserDetailReducer from "../features/otherUserDetailSlice";
import suggestsReducer from "../features/suggestSlice";
import detailContentReducer from "../features/contentDetailSlice";
import allReplyContentReducer from "../features/allReplyContentSlice";
import allFollowingReducer from "../features/following";
import allFollowerReducer from "../features/follower";
import allOtherFollowingReducer from "../features/otherFollowing";
import allOtherFollowerReducer from "../features/otherFollower";
import allUserReducer from "../features/allUserSlice";

export const store = configureStore({
  reducer: {
    content: contentReducer,
    userDetail: userDetailReducer,
    OtherUserDetail: OtherUserDetailReducer,
    suggests: suggestsReducer,
    allUser: allUserReducer,
    contentDetail: detailContentReducer,
    allReplyContent: allReplyContentReducer,
    allFollowing: allFollowingReducer,
    allFollower: allFollowerReducer,
    allOtherFollowing: allOtherFollowingReducer,
    allOtherFollower: allOtherFollowerReducer,
  },
});
