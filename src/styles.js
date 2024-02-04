import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 300,
      md: 600,
      bg: 900,
      lg: 1200,
    },
  },
});

export const MyGrid = styled(Grid)(() => ({
  [theme.breakpoints.down("md")]: {
    flexDirection: "column-reverse",
  },
}));
