import React from "react";
import { Container, Grid, Button, Typography, Box } from "@mui/material";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section
      className="home-section"
      style={{
        background: "linear-gradient(135deg, #0B1F3B 0%, #09203F 100%)", // Professional dark blue gradient
        padding: "60px 0",
        color: "#E8C27D", // Soft gold for an elegant contrast
      }}
    >
      <Container>
        <Grid container spacing={3} alignItems="center" justifyContent="center" style={{ textAlign: "center" }}>
          <Grid item xs={12} md={8}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: "bold",
                marginBottom: "20px",
                fontSize: {
                  xs: "2rem",
                  sm: "2.5rem",
                  md: "3rem",
                  lg: "3.5rem",
                },
              }}
            >
              Empower Your Future with Skill2Bridge
            </Typography>
            <Typography variant="h6" component="p" style={{ marginBottom: "40px", color: "#EAEAEA" }}>
              Bridging Talent with Opportunity
            </Typography>
            <Button
              variant="contained"
              size="large"
              style={{
                backgroundColor: "#E8C27D",
                color: "#0B1F3B",
                padding: "12px 24px",
                fontWeight: "bold",
                borderRadius: "8px",
              }}
            >
              <Link
                to="contact-section"
                smooth={true}
                duration={2000}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Get in Touch
              </Link>
            </Button>
          </Grid>
        </Grid>

        <Box mt={5}>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h5" component="h3" gutterBottom style={{ fontWeight: "bold", color: "#E8C27D" }}>
                Our Mission
              </Typography>
              <Typography variant="body1" component="p" style={{ color: "#EAEAEA" }}>
                To provide skill-based education that empowers students with industry-relevant knowledge, practical expertise, and leadership qualities to excel in a dynamic world.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h5" component="h3" gutterBottom style={{ fontWeight: "bold", color: "#E8C27D" }}>
                Our Vision
              </Typography>
              <Typography variant="body1" component="p" style={{ color: "#EAEAEA" }}>
                To create a learner-centric environment that fosters innovation, entrepreneurship, and lifelong learning, shaping future-ready professionals.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default Home;
