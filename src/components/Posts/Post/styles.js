// import { makeStyles } from '@material-ui/core/styles';

// export default makeStyles({
//   media: {
//     height: 0,
//     paddingTop: '56.25%',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     backgroundBlendMode: 'darken',
//   },
//   border: {
//     border: 'solid',
//   },
//   fullHeightCard: {
//     height: '100%',
//   },

//   grid: {
//     display: 'flex',
//   },
//   details: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     margin: '20px',
//   },
//   title: {
//     padding: '0 16px',
//   },
//   cardActions: {
//     padding: '0 16px 8px 16px',
//     display: 'flex',
//     justifyContent: 'space-between',
//   },
// });

import styled from "@emotion/styled";
import { Card, CardActions, CardMedia, Typography } from "@mui/material";

export const MyCard = styled(Card)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  borderRadius: "15px",
  height: "100%",
  position: "relative",
}));

export const MyCardMedia = styled(CardMedia)(() => ({
  height: 0,
  paddingTop: "56.25%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  backgroundBlendMode: "darken",
}));

export const MyDivOverlay = styled("div")(() => ({
  position: "absolute",
  top: "20px",
  left: "20px",
  color: "white",
}));

export const MyDivOverlay2 = styled("div")(() => ({
  position: "absolute",
  top: "20px",
  right: "20px",
  color: "white",
}));

export const MyDivDetails = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  margin: "20px",
}));

export const TypographyTitle = styled(Typography)(() => ({
  padding: "0 16px",
}));

export const MyCardActions = styled(CardActions)(() => ({
  padding: "0 16px 8px 16px",
  display: "flex",
  justifyContent: "space-between",
}));
