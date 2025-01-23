import React from "react";
import { Box, Typography, Button, Grid, Card, CardContent, CardMedia } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

export default function Home() {
  return (
    <Box >
      {/* بخش قهرمان (Hero Section) */}
      <Box
        sx={{
          height: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: "url('/path-to-your-background-image.jpg')", // تصویر پس‌زمینه
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          textAlign: "center",
          
        }}
      >
        <Typography variant="h2" fontWeight="bold">
          Welcome to Our Website
        </Typography>
        <Typography variant="h6" sx={{ mt: 2, mb: 4 }}>
          Discover the best services and experiences with us.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          endIcon={<ArrowForward />}
          sx={{ fontSize: "1.2rem", px: 4 }}
        >
          Get Started
        </Button>
      </Box>

      {/* بخش کارت‌ها (Services Section) */}
      <Box sx={{ py: 8, px: 4, backgroundColor: "#f5f5f5" }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          sx={{ mb: 6 }}
        >
          Our Services
        </Typography>
        <Grid container spacing={4}>
          {/* کارت 1 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="140"
                image="/path-to-service-image-1.jpg"
                alt="Service 1"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Service 1
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  A brief description of your amazing service.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* کارت 2 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="140"
                image="/path-to-service-image-2.jpg"
                alt="Service 2"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Service 2
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  A brief description of another amazing service.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* کارت 3 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="140"
                image="/path-to-service-image-3.jpg"
                alt="Service 3"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Service 3
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Another fantastic service description.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* بخش درباره ما (About Us Section) */}
      <Box sx={{ py: 8, px: 4 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <img
              src="/path-to-about-image.jpg"
              alt="About Us"
              style={{ width: "100%", borderRadius: "8px", boxShadow: "0px 4px 12px rgba(0,0,0,0.1)" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
              About Us
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              We are a company committed to delivering the best services for our customers.
              Our team is dedicated to creating amazing experiences tailored to your needs.
            </Typography>
            <Button variant="outlined" color="primary" size="large">
              Learn More
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* بخش تماس با ما (Contact Section) */}
      <Box
        sx={{
          py: 8,
          textAlign: "center",
          backgroundColor: "primary.main",
          color: "white",
        }}
      >
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
          Contact Us
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Have questions? Reach out to us, and we’ll get back to you as soon as possible.
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          Get in Touch
        </Button>
      </Box>
    </Box>
  );
}
