import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, TextField, Button, Typography, Link } from "@material-ui/core";
import { useAppData } from "../libs/appData/index";

const LogInPage: React.FC = () => {
  const { appData, removeAppData } = useAppData();
  const navigate = useNavigate();
  const [username, setUsername] = useState(appData?.userName || "");
  const [password, setPassword] = useState(appData?.userPassword || "");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = () => {
    setUsernameError("");
    setPasswordError("");
    if (!username) {
      setUsernameError("Username is required");
    }
    if (!password) {
      setPasswordError("Password is required");
    }
    if (username && password) {
      removeAppData({ dataPath: "registerUser" });
      //call the api to validate the user
      navigate("/home");
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
      <h1>Resume Manager</h1>
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
          label="Password"
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
            Login
          </Button>
        </Grid>
        <br />
        <Typography>
          No account ? Please {""}
          <Link variant="body2" onClick={() => navigate("./signup")}>
            Sign Up
          </Link>
          {""} here
        </Typography>
      </Grid>
    </Grid>
  );
};

export default LogInPage;
