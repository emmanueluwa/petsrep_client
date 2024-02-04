import React from "react";
import { Link } from "react-router-dom";

//styles & images
import {
  MyAppBar,
  MyAvatar,
  MyHeading,
  MyImage,
  MyProfileDiv,
  MyBrandContainerDiv,
  MyToolbar,
} from "./styles";
import petsrep from "../../images/petsrep.png";
import { Button } from "@mui/material";

const Navbar = () => {
  const user = null;

  return (
    <MyAppBar position="static" color="inherit">
      <MyBrandContainerDiv>
        <MyHeading component={Link} top="/" variant="h2" align="center">
          PetsRep
        </MyHeading>
        <MyImage src={petsrep} alt="petsrep" height="60" />
      </MyBrandContainerDiv>
      <MyToolbar>
        {user ? (
          <MyProfileDiv>
            <MyAvatar alt={user.result.name} src={user.result.imageUrl}>
              {user.result.name.charAt(0)}
            </MyAvatar>
            <MyUsername variant="h6">{user.result.name}</MyUsername>
            <Button variant="contained" color="secondary">
              Logout
            </Button>
          </MyProfileDiv>
        ) : (
          <Button
            component={Link}
            to="auth"
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        )}
      </MyToolbar>
    </MyAppBar>
  );
};

export default Navbar;
