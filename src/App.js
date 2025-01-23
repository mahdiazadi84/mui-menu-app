import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";


export default function App() {
  const loginFormRef = useRef(null); // مرجع به فرم لاگین

  const handleScrollToLogin = () => {
    loginFormRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Router>
      <Navbar onLoginClick={handleScrollToLogin} /> {/* ارسال تابع به نوار منو */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <div ref={loginFormRef}>
                <Login/>
              </div>
            </>
          }
        />
      </Routes>
    </Router>
  );
}
