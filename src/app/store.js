import { configureStore } from "@reduxjs/toolkit";
import postsSliceCall from "../features/posts/postsSliceCall";
import postsSliceAdd from "../features/posts/postsSliceAdd";
import postsSliceUpdate from "../features/posts/postsSliceUpdate";
import postsSliceUpdateLikes from "../features/posts/postsSliceUpdateLikes";

const store = configureStore({
  reducer: {
    postsCall: postsSliceCall,
    postsAdd: postsSliceAdd,
    postsUpdate: postsSliceUpdate,
    postsLike: postsSliceUpdateLikes,
  },
});

export default store;
