import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Link,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function LoginSignUp() {
  const [isLogin, setIsLogin] = useState(true); // حالت ورود یا ثبت‌نام
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  // اعتبارسنجی ایمیل
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // اعتبارسنجی رمز عبور
  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  };

  // ثبت‌نام یا ورود
  const handleSubmit = () => {
    setError("");
    setSuccess("");

    // اعتبارسنجی فرم
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!validatePassword(password)) {
      setError(
        "Password must be at least 8 characters long and include uppercase, lowercase, and a number."
      );
      return;
    }

    if (!isLogin && password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (isLogin) {
      // حالت ورود
      const registeredUsers = JSON.parse(localStorage.getItem("users")) || [];
      const user = registeredUsers.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        setSuccess("Login successful!");
        navigate("/home"); // هدایت به صفحه اصلی
      } else {
        setError("Invalid email or password. Please sign up first.");
      }
    } else {
      // حالت ثبت‌نام
      const registeredUsers = JSON.parse(localStorage.getItem("users")) || [];
      if (registeredUsers.some((user) => user.email === email)) {
        setError("This email is already registered. Please login.");
        return;
      }

      // ذخیره اطلاعات کاربر جدید
      const newUser = { email, password };
      localStorage.setItem(
        "users",
        JSON.stringify([...registeredUsers, newUser])
      );
      setSuccess("Registration successful! Please log in.");
      setIsLogin(true);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Paper sx={{ p: 4, width: "100%", maxWidth: 400, boxShadow: 3 }}>
        <Typography variant="h5" fontWeight="bold" textAlign="center" sx={{ mb: 3 }}>
          {isLogin ? "Login" : "Sign Up"}
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        {success && (
          <Alert severity="success" sx={{ mb: 2 }}>
            {success}
          </Alert>
        )}

        <TextField
          fullWidth
          label="Email"
          margin="normal"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          margin="normal"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {!isLogin && (
          <TextField
            fullWidth
            label="Confirm Password"
            type="password"
            margin="normal"
            variant="outlined"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        )}

        <Button
          fullWidth
          variant="contained"
          color="primary"
          size="large"
          sx={{ mt: 2 }}
          onClick={handleSubmit}
        >
          {isLogin ? "Login" : "Sign Up"}
        </Button>

        <Typography variant="body2" textAlign="center" sx={{ mt: 2 }}>
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <Link onClick={() => setIsLogin(!isLogin)} sx={{ cursor: "pointer" }}>
            {isLogin ? "Sign Up" : "Login"}
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
}
