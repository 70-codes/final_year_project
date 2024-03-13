import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Link,
} from "@mui/material";
import LockPersonTwoToneIcon from "@mui/icons-material/LockPersonTwoTone";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

export const paperStyle = {
  padding: 20,
  height: "70vh",
  width: "350px",
  margin: "20px auto",
  "border-radius": "15px",
};

export const avatarStyle = {
  backgroundColor: "#9c27b0",
  margin: "20px auto",
};

export const add_margin_to_top = { "margin-top": "20px" };

export const headerStyle = { margin: 0 };
const SingIn = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleSubmit = async (e, data) => {
    e.preventDefault();
    try {
      const response = await api.login({
        username: data.email,
        password: data.password,
      });

      localStorage.setItem("accessToken", response.access_token);
      navigate("/models");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

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
            <LockPersonTwoToneIcon />
          </Avatar>
          <Typography variant="h4">Sign In</Typography>
        </Grid>
        <form onSubmit={(e) => handleSubmit(e, data)}>
          <TextField
            variant="filled"
            label="Email"
            placeholder="Enter Email"
            fullWidth
            required
            type="email"
            style={add_margin_to_top}
            color="secondary"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
          <TextField
            helperText="Password must be atleast 8 characters"
            variant="filled"
            label="Password"
            placeholder="Enter Password"
            fullWidth
            required
            type="password"
            style={add_margin_to_top}
            color="secondary"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Checkbox
                color="secondary"
                name="remember"
                checked={data.remember}
                onChange={handleChange}
              />
            }
            label="Remember Me"
          />
          <Button variant="contained" color="secondary" type="submit" fullWidth>
            Sign In
          </Button>
        </form>
        <Typography style={add_margin_to_top}>
          <Link href="#" color={"secondary"}>
            {" "}
            Forgot password ?
          </Link>
        </Typography>
        <Typography>
          <Typography variant="p">Do you have an Account?</Typography>
          <RouterLink to={"/sign-up"}>
            <Link color={"secondary"}> Sign Up</Link>
          </RouterLink>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default SingIn;
