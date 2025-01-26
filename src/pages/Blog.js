import React from "react";
import { Box, Grid, Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import blog1 from "../assets/img/blog/blog-1.jpg";
import blog2 from "../assets/img/blog/blog-2.jpg";
import blog3 from "../assets/img/blog/blog-3.jpg";

const blogPosts = [
  {
    id: 1,
    title: "10 Tips for Effective Web Design",
    description:
      "Learn the secrets to creating visually appealing and user-friendly websites.",
    image: blog1,
    date: "January 20, 2025",
    author: "John Doe",
  },
  {
    id: 2,
    title: "The Future of Artificial Intelligence",
    description:
      "Discover how AI is shaping the world and what lies ahead in the tech industry.",
    image: blog2,
    date: "January 18, 2025",
    author: "Jane Smith",
  },
  {
    id: 3,
    title: "Mastering React in 2025",
    description:
      "A comprehensive guide to becoming a React expert in the modern development world.",
    image: blog3,
    date: "January 15, 2025",
    author: "David Lee",
  },
];

export default function Blog() {
  return (
    <Box sx={{ p: 4, backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        sx={{ mb: 4 }}
      >
        Latest Blog Posts
      </Typography>
      <Grid container spacing={4}>
        {blogPosts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <Card sx={{ boxShadow: 3, transition: "0.3s", "&:hover": { transform: "scale(1.05)" } }}>
              <CardMedia
                component="img"
                height="400"
                image={post.image}
                alt={post.title}
                style={{cursor:"pointer"}}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ mb: 1, color: "#1976d2" }}
                >
                  {post.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 1 }}
                >
                  {post.description}
                </Typography>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ display: "block", mb: 2 }}
                >
                  By {post.author} | {post.date}
                </Typography>
                <Button variant="contained" color="primary" size="small">
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
