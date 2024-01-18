import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api/index";
import StatusCode from "../../utils/StatusCode";

//intial state for api call, returns errors or data
const initialState = {
  data: [],
  //handling state and error codes
  status: "idle",
};

const postsSliceCall = createSlice({
  name: "postsCall",
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
      .addCase(getPosts.pending, (state, action) => {
        state.status = StatusCode.LOADING;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = StatusCode.IDLE;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.status = StatusCode.ERROR;
      });
  },
});

export const { fetchProducts } = postsSliceCall.actions;

export default postsSliceCall.reducer;

/*
Action creators
- functions that return actions

action
- object that has type and payload

working with async data, delay when fetching posts
- redux thunk
- => async (dispatch)
*/

export const getPosts = createAsyncThunk("posts/get", async () => {
  const { data } = await api.fetchPosts();
  return data;
});

// THUNK CREATOR: called from ui
// export function getPosts() {
//   return async function getPostsThunk(dispatch, state) {
//     try {
//       const { data } = await api.fetchPosts();

//       //thunk action creator calls this function
//       dispatch(fetchProducts(data));
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
// }
