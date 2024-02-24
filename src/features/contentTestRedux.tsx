// import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { DataContentTypes, RootState } from "../datas/data-types";
// import { API } from "../libs/api";

// interface initialStateType {
//   loading: boolean;
//   error: any;
//   contents: DataContentTypes[];
// }

// const initialState: initialStateType = {
//   loading: false,
//   error: false,
//   contents: [],
// };

// export const fetchContent = createAsyncThunk(
//   "content/fetchContent",
//   async () => {
//     try {
//       const response = await API.get<DataContentTypes[]>("spaces");
//       return response.data;
//     } catch (error) {
//       console.error("Error fetching content:", error);
//       throw error;
//     }
//   }
// );

// const contentSlice = createSlice({
//   name: "content",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(fetchContent.pending, (state) => {
//       state.loading = true;
//     });
//     builder.addCase(fetchContent.fulfilled, (state, action) => {
//       state.loading = false;
//       state.contents = action.payload;
//       state.error = "";
//     });
//     builder.addCase(fetchContent.rejected, (state, action) => {
//       state.loading = false;
//       state.contents = [];
//       state.error = action.error.message || "Unknown error";
//     });
//   },
// });

// export default contentSlice.reducer;
