import React from "react";
import { Box, Typography, Grid, IconButton, Link } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn, Telegram } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1976d2", // رنگ پس‌زمینه
        color: "white",
        padding: "20px 0",
        marginTop: "auto", // همیشه در پایین صفحه باقی می‌ماند
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        {/* ستون لینک‌ها */}
        <Grid item xs={12} sm={4} style={{paddingLeft:"50px"}}>
          <Typography variant="h6" gutterBottom>
            Quick Links
          </Typography>
          <Link href="/" color="inherit" underline="hover" sx={{ display: "block", marginBottom: 1 }}>
            Home
          </Link>
          <Link href="/about" color="inherit" underline="hover" sx={{ display: "block", marginBottom: 1 }}>
            About
          </Link>
          <Link href="/contact" color="inherit" underline="hover" sx={{ display: "block", marginBottom: 1 }}>
            Contact
          </Link>
        </Grid>

        {/* ستون اطلاعات تماس */}
        <Grid item xs={12} sm={4} style={{paddingLeft:"123px"}}>
          <Typography variant="h6" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body2">Email: info@example.com</Typography>
          <Typography variant="body2">Phone: +123 456 7890</Typography>
          <Typography variant="body2">Address: 123 Main St, City, Country</Typography>
        </Grid>

        {/* ستون شبکه‌های اجتماعی */}
        <Grid item xs={12} sm={4} sx={{ textAlign: "center" }}>
          <Typography variant="h6" gutterBottom>
            Follow Us
          </Typography>
          <IconButton href="https://facebook.com" target="_blank" color="inherit">
            <Facebook />
          </IconButton>
          <IconButton href="https://twitter.com" target="_blank" color="inherit">
            <Twitter />
          </IconButton>
          <IconButton href="https://instagram.com" target="_blank" color="inherit">
            <Instagram />
          </IconButton>
          <IconButton href="https://linkedin.com" target="_blank" color="inherit">
            <LinkedIn />
          </IconButton>
          <IconButton href="https://telegram.com" target="_blank" color="inherit">
            <Telegram />
          </IconButton>
        </Grid>
      </Grid>

      {/* حق کپی‌رایت */}
      <Box sx={{ textAlign: "center", marginTop: 3 }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} MyWebsite. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
