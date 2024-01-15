import styled from "@emotion/styled";
import { AppBar, Typography } from "@mui/material";

export const MyAppBar = styled(AppBar)(() => ({
  borderRadius: 15,
  margin: "30px 0",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
}));

export const MyHeading = styled(Typography)(() => ({
  color: "rgb(255 167 0)",
}));

export const MyImage = styled("img")(() => ({
  marginLeft: "15px",
}));
