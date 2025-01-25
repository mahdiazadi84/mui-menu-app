import React from "react";
import { Box, Typography, Button, Grid, Card, CardContent, CardMedia,CardActions } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import portfolio1 from "../assets/img/portfolio/portfolio-1.jpg";
import portfolio2 from "../assets/img/portfolio/portfolio-2.jpg";
import portfolio3 from "../assets/img/portfolio/portfolio-3.jpg";
import portfolio4 from "../assets/img/portfolio/portfolio-4.jpg";
import portfolio5 from "../assets/img/portfolio/portfolio-5.jpg";
import portfolio6 from "../assets/img/portfolio/portfolio-6.jpg";
import team3 from "../assets/img/team/team-3.jpg";
export default function Home() {
  const cards = [
    {
      title: "Amazing Features",
      description: "Discover the incredible features of our platform and.",
      image: portfolio1,
      link: "",
    },
    {
      title: "User-Friendly Design",
      description: "Our interface is designed to be intuitive and simple.",
      image: portfolio2,
      link: "",
    },
    {
      title: "Fast & Secure",
      description: "Experience fast and secure performance with us.",
      image: portfolio3,
      link: "",
    },
  ];


  return (
    <><Box container >
      
    </Box><Box>
        {/* بخش قهرمان (Hero Section) */}
        <Box
        
          sx={{
            height: "90vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "yellow",
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "black",
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


        <Grid container spacing={3} style={{marginTop:"35px"}}>
  {cards.map((card, index) => (
    <Grid item xs={12} sm={6} md={4} key={index}>
      <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
        <CardMedia
          component="img"
          height="200"
          image={card.image}
          alt={card.title}
        />
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {card.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {card.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" href={card.link}>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  ))}
</Grid>



        {/* بخش کارت‌ها (Services Section) */}
        <Box sx={{ py: 8, px: 4, backgroundColor: "#f5f5f5", marginTop:"60px" }}>
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
                  image = {portfolio4}
                  alt="Service 1" />
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
                  image = {portfolio5}
                  alt="Service 2" />
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
                  image = {portfolio6}
                  alt="Service 3" />
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
        <Box sx={{ py: 4, px: 4, backgroundColor: "#1976d2", color: "white" }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <img
                src={team3}
                alt=""
                style={{ width: "100%", borderRadius: "8px", boxShadow: "0px 4px 12px rgba(0,0,0,0.1)" }} />
            </Grid>
            <Grid item xs={12} md={6} style={{paddingTop:"460px"}}>
              <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
                About Us
              </Typography>
              <Typography variant="body1" color="white" sx={{ mb: 4 }}>
                We are a company committed to delivering the best services for our customers.
                Our team is dedicated to creating amazing experiences tailored to your needs.
              </Typography>
              <Button variant="contained" color="primary" size="large">
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
            backgroundColor: "white",
            color: "black",
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
      </Box></>
  );
}
