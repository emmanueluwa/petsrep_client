import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api/index";
import StatusCode from "../../utils/StatusCode";

//intial state for api call, returns errors or data
const initialState = {
  data: [],
  //handling state and error codes
  status: "idle",
};

const postsSliceAdd = createSlice({
  name: "postsAdd",
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
      .addCase(createPost.pending, (state, action) => {
        state.status = StatusCode.LOADING;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.data = data.push(action.payload);
        state.status = StatusCode.IDLE;
      })
      .addCase(createPost.rejected, (state, action) => {
        state.status = StatusCode.ERROR;
      });
  },
});

export const { fetchProducts } = postsSliceAdd.actions;

export default postsSliceAdd.reducer;

/*
Action creators
- functions that return actions

action
- object that has type and payload

working with async data, delay when fetching posts
- redux thunk
- => async (dispatch)
*/

export const createPost = createAsyncThunk("posts/add", async (post) => {
  const { data } = await api.createPost(post);
  return data;
});
