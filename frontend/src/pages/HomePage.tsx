import React, { useState } from "react";
import {
  Box,
  TextField,
  FormControl,
  InputAdornment,
  Input,
  InputLabel,
  Button,
  OutlinedInput,
  FormHelperText,
} from "@mui/material";

const HomePage: React.FC = () => {
  const [error, setError] = useState(false);

  const handleSubmit = () => {};
  return (
    <form onSubmit={handleSubmit}>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <FormControl error>
            <InputLabel htmlFor="fullName" aria-describedby="fullNameError">
              Full Name
            </InputLabel>
            <OutlinedInput id="fullName" label="Full Name" />
            <FormHelperText id="fullNameError">
              Full name required
            </FormHelperText>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="DOB">Date of Brith</InputLabel>
            <OutlinedInput id="DOB" label="Date of Brith" />
          </FormControl>
        </div>
        <FormControl fullWidth sx={{ m: 1 }} variant="filled">
          <InputLabel htmlFor="filled-adornment-skills">Skills</InputLabel>
          <Input
            id="filled-adornment-skills"
            error={error}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }} variant="filled">
          <InputLabel htmlFor="filled-adornment-experience">
            Experience
          </InputLabel>
          <Input
            id="filled-adornment-experience"
            error={error}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>
        <Button variant="outlined" type="submit">
          Save
        </Button>
      </Box>
    </form>
  );
};

export default HomePage;
