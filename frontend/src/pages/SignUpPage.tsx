import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, TextField, Button, Typography, Link } from "@material-ui/core";
import { useAppData } from "../libs/appData/index";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmedPasswordError, setConfirmedPasswordError] = useState("");

  const { updateAppData } = useAppData();

  const handleLogin = () => {
    setUsernameError("");
    setPasswordError("");
    if (!username) {
      setUsernameError("Username is required");
    }
    if (!password) {
      setPasswordError("Password is required");
    }
    if (!confirmedPassword) {
      setConfirmedPasswordError("Password is required");
    }
    if (username && password) {
      if (password !== confirmedPassword) {
        setConfirmedPasswordError("Password doesn't match");
      } else {
        updateAppData({
          dataPath: "registerUser",
          dataValue: {
            userName: username,
            userPassword: password,
          },
        });
        //call api to store the user
        navigate("/");
      }
    }
  };
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      alignContent="center"
    >
      <h1>Sign up</h1>
      <Grid item xs={10} sm={6} md={4}>
        <TextField
          label="Username"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          error={Boolean(usernameError)}
          helperText={usernameError}
        />
        <TextField
          label="Enter Password"
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={Boolean(passwordError)}
          helperText={passwordError}
        />
        <TextField
          label="Confirm Password"
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          value={confirmedPassword}
          onChange={(e) => setConfirmedPassword(e.target.value)}
          error={Boolean(confirmedPasswordError)}
          helperText={confirmedPasswordError}
        />
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
        >
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            onClick={() => handleLogin()}
          >
            Register
          </Button>
        </Grid>
        <br />
        <Typography>
          Already have an account ? Please {""}
          <Link variant="body2" onClick={() => navigate("/")}>
            Login
          </Link>
          {""} here
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SignUpPage;
