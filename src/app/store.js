import { configureStore } from "@reduxjs/toolkit";
import postsSliceCall from "../features/posts/postsSliceCall";
import postsSliceAdd from "../features/posts/postsSliceAdd";

const store = configureStore({
  reducer: {
    postsCall: postsSliceCall,
    postsAdd: postsSliceAdd,
  },
});

export default store;
