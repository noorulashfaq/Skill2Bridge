import React from "react";
import { Container, Grid, Typography, IconButton, Box } from "@mui/material";
import {
  Facebook,
  LinkedIn,
  Instagram,
  Email,
  Phone,
  LocationOn,
  AccessTime,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <footer
      style={{
        background: "#002147",
        color: "white",
        padding: "3% 0",
        marginTop: "3%",
      }}
    >
      <Container>
        <Grid container spacing={4} justifyContent="center">
          {/* Left Column - Quick Links */}
          <Grid item xs={12} md={3}>
            <Box display="flex" alignItems="center" mb={1}>
              <Email fontSize="small" sx={{ mr: 1 }} />
              <Typography variant="body2">info@skill2bridge.com</Typography>
            </Box>

            <Box display="flex" alignItems="center" mb={1}>
              <Phone fontSize="small" sx={{ mr: 1 }} />
              <Typography variant="body2">+91 9159376123</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <Box display="flex" alignItems="center">
              <LocationOn fontSize="small" sx={{ mr: 1 }} />
              <Typography variant="body2">
                No. 204, Udayappa Colony,
                <br />
                Shankar Nagar, Salem 636007,
                <br />
                Tamil Nadu, India
              </Typography>
            </Box>
          </Grid>

          {/* Contact Info Section */}
          <Grid item xs={12} md={3}>
            <Box display="flex" alignItems="center">
              <AccessTime fontSize="small" sx={{ mr: 1 }} />
              <Typography variant="body2">
                Mon-Fri: 09:00 AM - 06:00 PM
              </Typography>
            </Box>
          </Grid>

          {/* Social Media Section */}
          <Grid item xs={12} md={3} textAlign="center">
            {/* <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Follow Us
            </Typography> */}
            <Box>
              {[
                { icon: <Facebook />, link: "#" },
                { icon: <LinkedIn />, link: "#" },
                { icon: <Instagram />, link: "#" },
              ].map((social, index) => (
                <IconButton
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "white",
                    mx: 1,
                    transition: "transform 0.3s",
                    "&:hover": { transform: "scale(1.2)", color: "#0056b3" },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Footer Bottom Bar */}
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          mt={3}
        >
          <Grid item xs={12} md={6}>
            <Typography variant="body2" align="left">
              &copy; 2025 Skill2Bridge. All rights reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} textAlign="right">
            <Typography variant="body2">Developed by Noorul</Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
