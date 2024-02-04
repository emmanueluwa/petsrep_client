import React from "react";
import moment from "moment";
import { deletePost } from "../../../features/posts/postsSliceDelete";
import { updatePostLikes } from "../../../features/posts/postsSliceUpdateLikes";

import { useDispatch } from "react-redux";
//styles & images
import {
  MyCard,
  MyCardActions,
  MyCardMedia,
  MyDivDetails,
  MyDivOverlay,
  MyDivOverlay2,
  TypographyTitle,
} from "./styles";
import { CardActions, CardContent, Button, Typography } from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  return (
    <MyCard>
      <MyCardMedia image={post.selectedFile} title={post.title} />
      <MyDivOverlay>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </MyDivOverlay>
      <MyDivOverlay2>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => setCurrentId(post._id)}
        >
          <MoreHorizIcon fontSize="default" />
        </Button>
      </MyDivOverlay2>
      <MyDivDetails>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </MyDivDetails>
      <TypographyTitle variant="h5" gutterBottom>
        {post.title}
      </TypographyTitle>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.message}
        </Typography>
      </CardContent>
      <MyCardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(updatePostLikes({ id: post._id }))}
        >
          <ThumbUpAltIcon fontSize="small" />
          &nbsp; Like &nbsp;
          {post.likeCount}
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(deletePost(post._id))}
        >
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </MyCardActions>
    </MyCard>
  );
};

export default Post;
