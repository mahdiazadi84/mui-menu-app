import React from "react";
import { Box, Typography, Container } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#1976d2",
        color: "white",
        padding: 2,
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          © {new Date().getFullYear()} MUI Menu App. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
}
