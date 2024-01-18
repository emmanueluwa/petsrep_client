import React, { useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { createPost } from "../../features/posts/postsSliceAdd";

//styles & images
import { MyButton, MyFileInput, MyForm, MyPaper, MyTextField } from "./styles";
import { Typography } from "@mui/material";

const Form = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault;

    if (postData) {
      console.log({ postData });
      dispatch(createPost({ postData }));
    }
  };

  const clear = () => {};
  return (
    <MyPaper>
      <MyForm autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Typography variante="h6">Creating a Post</Typography>
        <MyTextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <MyTextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <MyTextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <MyTextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        />
        <MyFileInput>
          <FileBase
            type="false"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </MyFileInput>
        <MyButton
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </MyButton>
        <MyButton
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </MyButton>
      </MyForm>
    </MyPaper>
  );
};

export default Form;
