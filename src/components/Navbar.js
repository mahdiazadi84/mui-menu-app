import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Home, Info, Mail, Article, Login } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
      <Toolbar sx={{ justifyContent: "flex-start", gap: 2 }}>
        {/* گزینه های منو */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            startIcon={<Home />}
            color="inherit"
            onClick={() => navigate("/")}
          >
            Home
          </Button>
          <Button
            startIcon={<Info />}
            color="inherit"
            onClick={() => navigate("/about")}
          >
            About
          </Button>
          <Button
            startIcon={<Mail />}
            color="inherit"
            onClick={() => navigate("/contact")}
          >
            Contact
          </Button>
          <Button
            startIcon={<Article />}
            color="inherit"
            onClick={() => navigate("/blog")}
          >
            Blog
          </Button>
          <Button style={{marginLeft:"700px"}}
            startIcon={<Login />}
            color="inherit"
            onClick={() => navigate("/login")}
          >
            Login/SignUp
          </Button>


        </Box>
      </Toolbar>
    </AppBar>
  );
}
