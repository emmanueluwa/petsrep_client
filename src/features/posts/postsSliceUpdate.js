import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api/index";
import StatusCode from "../../utils/StatusCode";

//intial state for api call, returns errors or data
const initialState = {
  data: [],
  //handling state and error codes
  status: "idle",
};

const postsSliceUpdate = createSlice({
  name: "postsUpdate",
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
      .addCase(updatePost.pending, (state, action) => {
        state.status = StatusCode.LOADING;
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.data.map((post) =>
          post._id === action.payload._id ? action.payload : post
        );
        state.data = StatusCode.IDLE;
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.status = StatusCode.ERROR;
      });
  },
});

export default postsSliceUpdate.reducer;

/*
Action creators
- functions that return actions

action
- object that has type and payload

working with async data, delay when fetching posts
- redux thunk
- => async (dispatch)
*/

export const updatePost = createAsyncThunk("posts/update", async (post, id) => {
  const { data } = await api.createPost(post, id);
  return data;
});
