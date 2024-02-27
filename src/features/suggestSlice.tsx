import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  DataContentTypes,
  SuggestionTypes,
  SuggestionTypesRedux,
} from "../datas/data-types";
import { API, APIPOST } from "../libs/api";
import { SuggestState } from "../datas/data-Redux";
import axios from "axios";

export const fetchSuggest = createAsyncThunk(
  "suggest/fetchSuggest",
  async () => {
    try {
      const response = await APIPOST.get<SuggestionTypes[]>("suggestion");
      //   const response = await axios.get<SuggestionTypes[]>(
      //     "http://localhost:3000/api/v1/suggestion"
      //   );
      //   console.log("response.data.suggestions", response.data);
      return response.data;
    } catch (error) {
      console.log("Error while fetching content:", error);
      throw error;
    }
  }
);

const initialState: SuggestState = {
  isLoading: false,
  isError: false,
  data: [],
};

const suggestSlice = createSlice({
  name: "suggests",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSuggest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchSuggest.fulfilled, (state, action) => {
      // console.log("action payload", action.payload);
      state.isLoading = false;
      state.data = action.payload;
      state.isError = false;
    });
    builder.addCase(fetchSuggest.rejected, (state) => {
      state.isError = true;
      state.data = [];
      state.isLoading = false;
    });
  },
});

export default suggestSlice.reducer;
