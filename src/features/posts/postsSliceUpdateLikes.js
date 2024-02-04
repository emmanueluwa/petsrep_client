import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api/index";
import StatusCode from "../../utils/StatusCode";

//intial state for api call, returns errors or data
const initialState = {
  data: [],
  //handling state and error codes
  status: "idle",
};

const postsSliceUpdateLikes = createSlice({
  name: "postsUpdateLikes",
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
      .addCase(updatePostLikes.pending, (state, action) => {
        state.status = StatusCode.LOADING;
      })
      .addCase(updatePostLikes.fulfilled, (state, action) => {
        state.data = state.data.map((post) =>
          post._id === action.payload._id ? action.payload : post
        );

        // const updatedIndex = state.data.findIndex(
        //   (post) => post._id === action.payload._id
        // );
        // if (updatedIndex !== -1) {
        //   state.data[updatedIndex] = action.payload;
        // }

        state.status = StatusCode.IDLE;
      })
      .addCase(updatePostLikes.rejected, (state, action) => {
        state.status = StatusCode.ERROR;
      });
  },
});

export default postsSliceUpdateLikes.reducer;

export const updatePostLikes = createAsyncThunk(
  "posts/updateLikes",
  async (payload) => {
    const { id } = payload;
    console.log(`updating likes for post ${id}`);

    const { data } = await api.updateLikes(id);
    return data;
  }
);
