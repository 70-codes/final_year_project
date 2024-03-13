// import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useState } from "react";

const navLinkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontWeight: "bold",
  // "font-weight": "400",
};
const Nav = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link style={navLinkStyle} to={"/"}>
              Financial Distress
            </Link>
          </Typography>

          <Link to={"/sign-in"}>
            <Button style={navLinkStyle}>Sign In</Button>
          </Link>
          <Link to={"/sign-up"}>
            <Button style={navLinkStyle}>Sign Up</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;
