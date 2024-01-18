import { useDispatch } from "react-redux";
import { useEffect } from "react";
// import { fetchPosts } from "./reducers/posts";

//components
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

//images & styles
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import petsrep from "./images/petsrep.png";
import { MyAppBar, MyHeading, MyImage } from "./styles";

function App() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchPosts());
  // }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <MyAppBar position="static" color="inherit">
        <MyHeading variant="h2" align="center">
          PetsRep
        </MyHeading>
        <MyImage src={petsrep} alt="petsrep" height="60" />
      </MyAppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
