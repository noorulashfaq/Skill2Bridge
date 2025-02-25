import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { Card, CardContent, Grid, Typography, Box, Link } from "@mui/material";

const programmes = [
  {
    id: 1,
    title: "LMS PG & UG Courses",
    description: "Know More >",
    icon: faBookOpen,
    link: "/lms-courses",
  },
  {
    id: 2,
    title: "PG Engineering Courses",
    description: "Know More >",
    icon: faGraduationCap,
    link: "/pg-engineering",
  },
];

const Programmes = () => {
  return (
    <section className="programmes-section">
      <Box sx={{ padding: "4rem 2rem", background: "linear-gradient(135deg, #0B1F3B 50%, #1A2A4F 50%)" }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" color="#E8C27D" mb={4}>
          Programmes UG & PG
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {programmes.map((programme) => (
            <Grid item key={programme.id} xs={12} sm={6} md={4}>
              <Card
                elevation={6}
                sx={{
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  padding: "1.5rem",
                  textAlign: "center",
                  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                <FontAwesomeIcon
                  icon={programme.icon}
                  style={{
                    color: "#E8C27D",
                    fontSize: "3.5rem",
                    marginBottom: "1rem",
                  }}
                />
                <Typography variant="h5" fontWeight="bold" color="#1A2A4F">
                  {programme.title}
                </Typography>
                <CardContent>
                  <Link
                    href={programme.link}
                    underline="none"
                    sx={{
                      backgroundColor: "#E8C27D",
                      color: "#0B1F3B",
                      fontWeight: "bold",
                      padding: "8px 16px",
                      borderRadius: "6px",
                      display: "inline-block",
                      transition: "background 0.3s ease",
                      "&:hover": {
                        backgroundColor: "#C7A062",
                      },
                    }}
                  >
                    {programme.description}
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </section>
  );
};

export default Programmes;
