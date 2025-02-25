import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGraduate, faChalkboardTeacher, faSmile } from "@fortawesome/free-solid-svg-icons";
import { Card, CardContent, Grid, Typography, Box } from "@mui/material";

const technologies = [
  {
    id: 1,
    title: "20+",
    description: "Students Placed",
    icon: faUserGraduate, 
  },
  {
    id: 2,
    title: "10+",
    description: "Career Counsellor",
    icon: faChalkboardTeacher, 
  },
  {
    id: 3,
    title: "100+",
    description: "Happy Students",
    icon: faSmile, 
  },
];

const TrainingCards = () => {
  return (
    <Box sx={{ padding: "4rem 2rem", backgroundColor: "#f0f4f8" }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        color="#002855"
        mb={4}
      >
        Navigating the World of Online &<br />Office Education Discover, Learn, Succeed
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {technologies.map((tech) => (
          <Grid item key={tech.id} xs={12} sm={6} md={4}>
            <Card
              elevation={3}
              sx={{
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                padding: "1.5rem",
                textAlign: "center",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 8px 16px rgba(0,0,0,0.15)",
                },
              }}
            >
              <FontAwesomeIcon
                icon={tech.icon}
                style={{
                  color: "#0056b3",
                  fontSize: "3rem",
                  marginBottom: "1rem",
                }}
              />
              <Typography variant="h5" fontWeight="bold" color="#002855">
                {tech.title}
              </Typography>
              <CardContent>
                <Typography variant="body1" color="text.secondary">
                  {tech.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TrainingCards;
