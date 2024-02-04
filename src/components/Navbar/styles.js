import styled from "@emotion/styled";
import { AppBar, Typography, Toolbar, Avatar } from "@mui/material";

export const MyAppBar = styled(AppBar)(() => ({
  borderRadius: 15,
  margin: "30px 0",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 50px",
}));

export const MyHeading = styled(Typography)(() => ({
  color: "rgb(255 167 0)",
  textDecoration: "none",
}));

export const MyUsername = styled(Typography)(() => ({
  display: "flex",
  alignItems: "center",
}));

export const MyImage = styled("img")(() => ({
  marginLeft: "15px",
}));

export const MyBrandContainerDiv = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
}));

export const MyToolbar = styled(Toolbar)(() => ({
  display: "flex",
  justifyContent: "flex-end",
  width: "400px",
}));

export const MyAvatar = styled(Avatar)(() => ({
  color: theme.palette.getContrastText(deepPurple[500]),
  backgroundColor: deepPurple[500],
}));

export const MyProfileDiv = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  width: "400px",
}));
