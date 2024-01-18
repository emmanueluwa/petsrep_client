import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import { getPosts } from "../../features/posts/postsSliceCall";
import { useDispatch } from "react-redux";
import StatusCode from "../../utils/StatusCode";

//styles & images
import {} from "./styles";

const Posts = () => {
  //retreiving data,from redex data passing, global redux stores
  const { data: posts, status } = useSelector((state) => state.postsCall);
  const dispatch = useDispatch();

  console.log(posts);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  if (status === StatusCode.LOADING) {
    return <p>Loading...</p>;
  }

  if (status === StatusCode.ERROR) {
    return <p>Something went wrong</p>;
  }
  return (
    <>
      <h1>Posts</h1>
      <Post />
      <Post />
    </>
  );
};

export default Posts;
