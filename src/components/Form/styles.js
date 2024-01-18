// import { makeStyles } from "@material-ui/core/styles";

// export default makeStyles((theme) => ({
//   root: {
//     "& .MuiTextField-root": {
//       margin: theme.spacing(1),
//     },
//   },

//   buttonSubmit: {
//     marginBottom: 10,
//   },
// }));

import styled from "@emotion/styled";
import { Button, TextField, Paper } from "@mui/material";

export const MyButton = styled(Button)(() => ({
  marginBottom: "10px",
}));

export const MyTextField = styled(TextField)(() => ({
  margin: "10px 0",
}));

export const MyPaper = styled(Paper)(() => ({
  padding: "2px",
}));

export const MyForm = styled("form")(() => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  margin: "1px",
}));

export const MyFileInput = styled("div")(() => ({
  width: "97%",
  margin: "10px 0",
}));
