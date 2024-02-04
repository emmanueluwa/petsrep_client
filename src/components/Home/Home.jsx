import React from "react";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getPosts } from "../../features/posts/postsSliceCall";

import Posts from "../Posts/Posts";
import Form from "../Form/Form";

import { Container, Grow, Grid } from "@mui/material";
import { MyGrid } from "../../styles";

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Grow in>
      <Container>
        <MyGrid
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </MyGrid>
      </Container>
    </Grow>
  );
};

export default Home;
