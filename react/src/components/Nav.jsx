// import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import Container from "@mui/material/Container";

const navLinkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontWeight: "bold",
  // "font-weight": "400",
};
const Nav = () => {
  return (
    <div>
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
              {/* <MenuIcon /> */}
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <NavLink style={navLinkStyle} to={"/"}>
                Financial Distress
              </NavLink>
            </Typography>
            <NavLink to={"/sign-in"}>
              <Button style={navLinkStyle}>Sign In</Button>
            </NavLink>
            <NavLink to={"/sign-up"}>
              <Button style={navLinkStyle}>Sign Up</Button>
            </NavLink>
            <NavLink to={"/about"}>
              <Button style={navLinkStyle}>About Us</Button>
            </NavLink>
            <NavLink to={"/contact"}>
              <Button style={navLinkStyle}>Contact Us</Button>
            </NavLink>
            <NavLink to={"/models"}>
              <Button style={navLinkStyle}>Models</Button>
            </NavLink>
            <NavLink to={"/visualization"}>
              <Button style={navLinkStyle}>Visualization</Button>
            </NavLink>
          </Toolbar>
        </AppBar>
      </Box>
      <Container maxWidth="lg" sx={{ mt: 5, backgroundColor: "#9AA0A6" }}>
        <Outlet></Outlet>
      </Container>
    </div>
  );
};

export default Nav;
