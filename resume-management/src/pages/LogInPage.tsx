import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

const LogInPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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
      //submit the form
      alert("sucess");
    }
  };

  return (
    <>
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

      <Button
        variant="contained"
        color="primary"
        type="submit"
        onClick={() => handleLogin()}
      >
        Login
      </Button>
    </>
  );
};

export default LogInPage;
