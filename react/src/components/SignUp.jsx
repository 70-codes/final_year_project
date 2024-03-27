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
import auth from "../api/axios";

const SignUp = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
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
  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   if (data.password !== data.confirmPassword) {
  //     alert("Passwords do not match.");
  //     return;
  //   }

  //   try {
  //     const response = await axios.post(
  //       "http://localhost:8000/register",
  //       data,
  //       {
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/x-www-form-urlencoded",
  //         },
  //       }
  //     );

  //     if (response.status === 200) {
  //       alert("Registration successful!");
  //       window.location.href = "/signin";
  //     }
  //   } catch (error) {
  //     console.error("An error occurred during registration: ", error.message);
  //     alert("An error occurred during registration, please try again later.");
  //   }
  // };

  const handleSubmit = async (e, data) => {
    e.preventDefault();
    try {
      const userData = {
        fname: data.firstname,
        lname: data.lastname,
        email: data.email,
        // created_at: "",
        password: data.password,
      };
      console.log(userData);

      const response = await auth.createAccount(userData);

      console.log("Account created successfully:", response);
      // Handle successful account creation here
      // e.g. redirect to login page, show success message, etc.
    } catch (error) {
      console.error("Error creating account:", error.message);
      // Handle error cases here
      // e.g. show error message to user
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
