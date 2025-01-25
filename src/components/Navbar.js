import React from "react";
import { AppBar, Toolbar, Box, Button } from "@mui/material";
import { Home, Info, ContactMail, Login } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          gap: 2,
        }}
      >
        {/* لوگو */}
        

        {/* گزینه‌های منو */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          <Button
            startIcon={<Home />}
            color="inherit"
            onClick={() => navigate("/")}
            sx={{ textTransform: "none" }}
          >
            Home
          </Button>
          <Button
            startIcon={<Info />}
            color="inherit"
            onClick={() => navigate("/about")}
            sx={{ textTransform: "none" }}
          >
            About
          </Button>
          <Button
            startIcon={<ContactMail />}
            color="inherit"
            onClick={() => navigate("/contact")}
            sx={{ textTransform: "none" }}
          >
            Contact
          </Button>
          <Button
            startIcon={<Login />}
            color="inherit"
            onClick={() => navigate("/login")}
            sx={{ textTransform: "none" }}
          >
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
