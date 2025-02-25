import React from "react";
import { Container, Typography, Box, Grid, Paper } from "@mui/material";
import aboutImage from "../Images/HeroImg.png";

const About = () => {
  return (
    <section className="about-section">
      <Box
        sx={{
          background: "linear-gradient(135deg, #0B1F3B 50%, #1A2A4F 50%)", // Deep professional blue
          paddingY: 8,
          // marginTop: 8,
        }}
      >
        <Container>
          <Grid container spacing={4} alignItems="center">
            {/* Left Column - Text Content with Background Style */}
            <Grid item xs={12} md={6}>
              <Paper
                elevation={6}
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.95)", // Soft white with subtle transparency
                  padding: "2rem",
                  borderRadius: "10px",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
                }}
              >
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{ color: "#E8C27D", textAlign: { xs: "center", md: "left" } }}
                >
                  About Us
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ color: "#0B1F3B", fontWeight: "bold", textAlign: { xs: "center", md: "left" } }}
                >
                  Empowering the Future Through Skill-Based Education  
                </Typography>
                <Typography
                  variant="body2"
                  paragraph
                  sx={{ color: "#333", textAlign: { xs: "center", md: "left" } }}
                >
                  We believe that knowledge without application is incomplete. Our mission is to bridge the gap between academia and industry by equipping students with practical skills they need to thrive in the real world.
                </Typography>
                <Typography
                  variant="body2"
                  paragraph
                  sx={{ color: "#333", textAlign: { xs: "center", md: "left" } }}
                >
                  <strong>What Makes Us Different?</strong>  
                  <br />✅ <span style={{ color: "#0B1F3B", fontWeight: "bold" }}>UGC-Recognized B.Voc Programs</span>  
                  <br />✅ <span style={{ color: "#0B1F3B", fontWeight: "bold" }}>40% General Education & 60% Skill-Based Training</span>  
                  <br />✅ <span style={{ color: "#0B1F3B", fontWeight: "bold" }}>Industry-Aligned Curriculum</span> – Covering high-growth fields  
                  <br />✅ <span style={{ color: "#0B1F3B", fontWeight: "bold" }}>Expert Faculty & Industry Mentors</span> – Real-world insights  
                  <br />✅ <span style={{ color: "#0B1F3B", fontWeight: "bold" }}>Career-Oriented Learning</span> – Preparing for employment & entrepreneurship  
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#333", textAlign: { xs: "center", md: "left" } }}
                >
                  At <span style={{ color: "#E8C27D", fontWeight: "bold" }}>Skill2Bridge</span>, we don’t just educate—we inspire, innovate, and transform lives.  
                  Join us in shaping a future where education empowers, skills create opportunities, and knowledge fuels success.
                </Typography>
              </Paper>
            </Grid>

            {/* Right Column - Image */}
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={aboutImage}
                alt="About Us"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 2,
                  boxShadow: "0px 6px 14px rgba(0, 0, 0, 0.2)",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </section>
  );
};

export default About;
