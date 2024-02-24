import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "../features/contentSlice";
// import contentTestRedux from "../features/contentTestRedux";

export const store = configureStore({
  reducer: {
    content: contentReducer,
    // contentTest: contentTestRedux,
  },
});
