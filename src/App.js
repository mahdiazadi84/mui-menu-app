import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // فوتر
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Blog from "./pages/Blog";
import ScrollToTopButton from "./components/ScrollToTopButton";

export default function App() {
  return (
    <Router>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        {/* نوار ناوبری */}
        <Navbar />

        {/* محتوا */}
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
         <ScrollToTopButton/>
        {/* فوتر */}
        <Footer />
      </div>
    </Router>
  );
}
