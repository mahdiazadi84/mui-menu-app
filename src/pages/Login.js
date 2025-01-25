import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  Grid,
} from "@mui/material";

export default function LoginSignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // اعتبارسنجی ساده
    if (email === "" || password === "") {
      setError("Please fill in all fields.");
    } else {
      setError("");
      alert("Login Successful!");
      // اینجا می‌توانید کاربر را وارد سیستم کنید
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: "100vh" }}>
      <Box
        sx={{
          width: 300,
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor:"white"
        }}
      >
        <Typography variant="h5" gutterBottom align="center">
          Login
        </Typography>
        {error && (
          <Alert severity="error" sx={{ marginBottom: 2 }}>
            {error}
          </Alert>
        )}
        <TextField
          label="Email"
          type="email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleLogin}
        >
          Login
        </Button>
        <Typography variant="body2" align="center" sx={{ marginTop: 2 }}>
          Don't have an account? <a href="/signup">Sign Up</a>
        </Typography>
      </Box>
    </Grid>
  );
}
