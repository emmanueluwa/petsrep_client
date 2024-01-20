import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import { getPosts } from "../../features/posts/postsSliceCall";
import { useDispatch } from "react-redux";
import StatusCode from "../../utils/StatusCode";

//styles & images
import { MyGrid } from "./styles";
import { CircularProgress, Grid } from "@mui/material";

const Posts = ({ setCurrentId }) => {
  //retreiving data,from redex data passing, global redux stores
  const { data: posts, status } = useSelector((state) => state.postsCall);

  if (status === StatusCode.LOADING) {
    return <CircularProgress />;
  }

  if (status === StatusCode.ERROR) {
    return <p>Something went wrong</p>;
  }
  return (
    <MyGrid container alignItems="stretch" spacing={3}>
      {posts.map((post) => (
        <Grid key={post._id} xs={12} sm={6} item>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </MyGrid>
  );
};

export default Posts;
