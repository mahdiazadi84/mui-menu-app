import React from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
} from "@mui/material";
import { Phone, Email, LocationOn } from "@mui/icons-material";

export default function Contact() {
  return (
    <Box sx={{ py: 8, px: 4 }}>
      <Typography variant="h4" fontWeight="bold" textAlign="center" sx={{ mb: 6 }}>
        Contact Us
      </Typography>
      <Grid container spacing={4}>
        {/* فرم تماس */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 4, boxShadow: 3 }}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 3 }}>
              Send us a message
            </Typography>
            <TextField
              fullWidth
              label="Name"
              margin="normal"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Email"
              margin="normal"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Message"
              multiline
              rows={4}
              margin="normal"
              variant="outlined"
            />
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ mt: 2 }}
            >
              Send Message
            </Button>
          </Paper>
        </Grid>

        {/* اطلاعات تماس */}
        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Phone color="primary" />
              <Typography variant="body1">+123 456 789</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Email color="primary" />
              <Typography variant="body1">info@website.com</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <LocationOn color="primary" />
              <Typography variant="body1">123 Main Street, City, Country</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
