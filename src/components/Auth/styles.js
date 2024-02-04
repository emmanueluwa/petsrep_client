import styled from "@emotion/styled";
import {
  AppBar,
  Typography,
  Toolbar,
  Paper,
  Avatar,
  Button,
} from "@mui/material";

// paper: {
//
//   },
//   root: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(1),
//     },
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//
//   },

//   googleButton: {
//     marginBottom: theme.spacing(2),
//   },

export const MyPaper = styled(Paper)(() => ({
  marginTop: "50px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "30px 10px",
}));

export const MyAvatar = styled(Avatar)(() => ({
  margin: "1px",
  backgroundColor: "#9c27b0",
}));

export const MyForm = styled("form")(() => ({
  width: "100%", // Fix IE 11 issue.
  marginTop: "25px",
}));

export const MyButton = styled(Button)(() => ({
  marginTop: "30px",
}));
