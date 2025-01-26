import React, { useState, useEffect } from "react";
import {
  Box,
  Tabs,
  Tab,
  TextField,
  Button,
  
  Grid,
  Paper,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function LoginSignUp() {
  const [activeTab, setActiveTab] = useState(0); // 0 for Login, 1 for SignUp
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      navigate("/"); // Redirect to home if already logged in
    }
  }, [navigate]);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    setError("");
    setSuccessMessage("");
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignUp = () => {
    const { email, password, confirmPassword } = formData;

    // Validation
    if (!email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Save user data to localStorage
    localStorage.setItem("user", JSON.stringify({ email, password }));
    setSuccessMessage("Registration successful! Please log in.");
    setFormData({ email: "", password: "", confirmPassword: "" });
    setActiveTab(0); // Switch to Login tab
  };

  const handleLogin = () => {
    const { email, password } = formData;
    const storedUser = JSON.parse(localStorage.getItem("user"));
  
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    if (!storedUser || storedUser.email !== email || storedUser.password !== password) {
      setError("Invalid email or password.");
      return;
    }
  
    // ذخیره وضعیت ورود
    localStorage.setItem("isLoggedIn", "true");
    navigate("/"); // هدایت به صفحه اصلی
  };
  

  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: "100vh" }}>
      <Grid item xs={11} sm={8} md={5}>
        <Paper elevation={6} sx={{ p: 4, borderRadius: 2 }}>
          <Box sx={{ mb: 3 }}>
            <Tabs value={activeTab} onChange={handleTabChange} centered>
              <Tab label="Login" />
              <Tab label="Sign Up" />
            </Tabs>
          </Box>
          {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
          {successMessage && <Alert severity="success" sx={{ mb: 2 }}>{successMessage}</Alert>}
          {activeTab === 0 ? (
            <Box>
              <TextField
                label="Email"
                name="email"
                fullWidth
                margin="normal"
                onChange={handleInputChange}
                value={formData.email}
              />
              <TextField
                label="Password"
                name="password"
                type="password"
                fullWidth
                margin="normal"
                onChange={handleInputChange}
                value={formData.password}
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
                onClick={handleLogin}
              >
                Login
              </Button>
            </Box>
          ) : (
            <Box>
              <TextField
                label="Email"
                name="email"
                fullWidth
                margin="normal"
                onChange={handleInputChange}
                value={formData.email}
              />
              <TextField
                label="Password"
                name="password"
                type="password"
                fullWidth
                margin="normal"
                onChange={handleInputChange}
                value={formData.password}
              />
              <TextField
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                fullWidth
                margin="normal"
                onChange={handleInputChange}
                value={formData.confirmPassword}
              />
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                sx={{ mt: 2 }}
                onClick={handleSignUp}
              >
                Sign Up
              </Button>
            </Box>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
}
