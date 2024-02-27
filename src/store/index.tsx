import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "../features/contentSlice";
import userDetailReducer from "../features/userDetailSlice";
import suggestsReducer from "../features/suggestSlice";

export const store = configureStore({
  reducer: {
    content: contentReducer,
    userDetail: userDetailReducer,
    suggests: suggestsReducer,
  },
});
