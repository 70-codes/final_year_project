import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState } from "react";
import {
  Grid,
  Paper,
  Typography,
  Avatar,
  TextField,
  Button,
} from "@mui/material";
import {
  paperStyle,
  avatarStyle,
  headerStyle,
  add_margin_to_top,
} from "./SignIn";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const handleSubmit = (e, data) => {
  e.preventDefault();
  if (data.password !== data.confirmPassword) {
    alert("Passwords do not match. Please try again.");
    return;
  }
  console.log(data);
};

const SignUp = () => {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreement: false,
  });
  const handleChange = (e) => {
    if (e.target.type === "checkbox") {
      setData((oldData) => ({ ...oldData, [e.target.name]: e.target.checked }));
    } else {
      setData((oldData) => ({ ...oldData, [e.target.name]: e.target.value }));
    }
  };

  return (
    <Grid>
      <Paper elevation={24} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AccountCircleIcon />
          </Avatar>
          <Typography variant="h4" style={headerStyle}>
            Sign Up
          </Typography>
          <Typography variant="caption">
            Please Enter your details to create an account
          </Typography>
        </Grid>
        <form onSubmit={(e) => handleSubmit(e, data)}>
          <TextField
            label="First Name"
            fullWidth
            required
            color="secondary"
            variant="filled"
            name="firstname"
            value={data.firstname}
            style={add_margin_to_top}
            onChange={handleChange}
          ></TextField>
          <TextField
            label="Last Name"
            fullWidth
            required
            color="secondary"
            variant="filled"
            name="lastname"
            style={add_margin_to_top}
            value={data.lastname}
            onChange={handleChange}
          ></TextField>

          <TextField
            label="Email"
            fullWidth
            required
            color="secondary"
            variant="filled"
            style={add_margin_to_top}
            name="email"
            value={data.email}
            onChange={handleChange}
          ></TextField>
          <TextField
            label="Password"
            fullWidth
            required
            color="secondary"
            variant="filled"
            type="password"
            helperText="Your password must be more than 8 characters"
            style={add_margin_to_top}
            name="password"
            value={data.password}
            onChange={handleChange}
          ></TextField>
          <TextField
            label="Confirm Password"
            fullWidth
            required
            type="password"
            color="secondary"
            variant="filled"
            helperText="Confirm Password"
            style={add_margin_to_top}
            name="confirmPassword"
            onChange={handleChange}
            value={data.confirmPassword}
          ></TextField>
          <FormControlLabel
            control={
              <Checkbox
                color="secondary"
                name="agreement"
                checked={data.agreement}
                onChange={handleChange}
              />
            }
            label="I agree To the terms and conditions"
          />

          <Button
            color="secondary"
            variant="contained"
            fullWidth
            style={add_margin_to_top}
            type="submit"
          >
            Sign Up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default SignUp;
