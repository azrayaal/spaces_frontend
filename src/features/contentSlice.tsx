import { createSlice } from "@reduxjs/toolkit";

interface ContentState {
  isLoading: boolean;
  isError: boolean;
  data: any;
}
const initialState: ContentState = {
  isLoading: false,
  isError: false,
  data: [],
};

const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    setContent: (state, action) => {
      console.log("action paylod", action.payload);
      // const content = action.payload.map((i: any) => {
      //   return {
      //     id: i.id,
      //     content: i.content,
      //   };
      // });
      // return content;
      return {
        ...state,
        data: action.payload.map((i: any) => ({
          id: i.id,
          content: i.content,
        })),
      };

      // const content = action.payload.map((i: any) => {
      //   return {
      //     ...state,
      //     id: i.id,
      //     content: i.content,
      //   };
      // });

      // return content;
    },
  },
});

// const contentSlice = createSlice({
//   name: "content",
//   initialState,
//   reducers: {
//     setContent: (_, action) => {
//       console.log("action paylod", action.payload);
//       const content = action.payload.map((i: any) => {
//         return {
//           id: i.id,
//           content: i.content,
//         };
//       });
//       return content;
//     },
//   },
// });

// extraReducers: (builder) => {
//   builder.addCase(fetchContent.pending, (state, action) => {
//     state.isLoading = true;
//   });
//   builder.addCase(fetchContent.fulfilled, (state, action) => {
//     state.isLoading = false;
//     state.data = action.payload;
//   });
//   builder.addCase(fetchContent.rejected, (state, action) => {
//     state.isError = true;
//   });
// },
// });

export const { setContent } = contentSlice.actions;
export default contentSlice.reducer;
