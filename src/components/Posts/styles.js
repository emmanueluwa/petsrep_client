// import { makeStyles } from "@material-ui/core/styles";

// export default makeStyles((theme) => ({
//   mainContainer: {
//     display: "flex",
//     alignItems: "center",
//   },
//   smMargin: {
//     margin: theme.spacing(1),
//   },
//   actionDiv: {
//     textAlign: "center",
//   },
// }));

import styled from "@emotion/styled";
import { Grid } from "@mui/material";

export const MyGrid = styled(Grid)(() => ({
  display: "flex",
  alignItems: "center",
}));
