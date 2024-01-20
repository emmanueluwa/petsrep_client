import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api/index";
import StatusCode from "../../utils/StatusCode";

//intial state for api call, returns errors or data
const initialState = {
  data: [],
  //handling state and error codes
  status: "idle",
};

const postsSliceDelete = createSlice({
  name: "postsDelete",
  initialState,
  reducers: {
    //thunk creator, dispatches action for this function
    // fetchProducts(state, action) {
    //   state.data = action.payload;
    // },
  },
  //handling async tasks
  extraReducers: (builder) => {
    //handle the 3 states of promises
    //read data and do state update logic
    builder
      .addCase(deletePost.pending, (state, action) => {
        state.status = StatusCode.LOADING;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.data = data.filter((post) =>
          post._id === action.payload._id ? action.payload : post
        );

        state.status = StatusCode.IDLE;
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.status = StatusCode.ERROR;
        console.log(state.status);
      });
  },
});

export default postsSliceDelete.reducer;

/*
Action creators
- functions that return actions

action
- object that has type and payload

working with async data, delay when fetching posts
- redux thunk
- => async (dispatch)
*/

export const deletePost = createAsyncThunk("posts/delete", async (id) => {
  await api.deletePost(id);
});
