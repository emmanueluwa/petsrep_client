import React, { useState } from "react";

//styles & images
import { MyAvatar, MyForm, MyPaper, MyButton } from "./styles";
import { Avatar, Button, Container, Grid, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Input from "./Input";

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = () => {};

  const handleChange = () => {};

  // ON/OFF toggle
  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const switchMode = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
    handleShowPassword(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <MyPaper elevation={3}>
        <MyAvatar>
          <LockOutlinedIcon />
        </MyAvatar>
        <Typography variant="h5">{isSignUp ? "Sign Up" : "Sign In"}</Typography>
        <MyForm onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignUp && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignUp && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <MyButton type="submit" fullWidth variant="contained" color="primary">
            {isSignUp ? "Sign Up" : "Sign In"}
          </MyButton>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignUp
                  ? "Already a member? Sign In"
                  : "Not a member yet? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </MyForm>
      </MyPaper>
    </Container>
  );
};

export default Auth;
