import { configureStore } from "@reduxjs/toolkit";
import postsSliceCall from "../features/posts/postsSliceCall";
import postsSliceAdd from "../features/posts/postsSliceAdd";
import postsSliceUpdate from "../features/posts/postsSliceUpdate";

const store = configureStore({
  reducer: {
    postsCall: postsSliceCall,
    postsAdd: postsSliceAdd,
    postsUpdate: postsSliceUpdate,
  },
});

export default store;
