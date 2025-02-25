import React from "react";
import { Card, CardHeader, Grid, Typography } from "@mui/material";

const campus = [
  {
    id: 1,
    name: "20+ Students Placed",
    logo: null,
  },
  {
    id: 2,
    name: "10+ Career Counsellor",
    logo: null,
  },
  {
    id: 3,
    name: "100+ Happy Students",
    logo: null,
  },  
];

const CampusCard = () => {
  return (
    <section
      className="campus-section"
      style={{
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)", // Gradient background
        paddingTop: "3%",
        paddingBottom: "5%",
      }}
    >
      <Card
        elevation={0}
        sx={{
          padding: "2%",
          background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        }}
      >
        <CardHeader
          title="CAMPUSES WHERE OUR EXPERTS WORKED"
          sx={{ textAlign: "center", color: "#0c83c8", fontSize: "1.5rem" }}
        />
        <Grid container spacing={4}>
          {campus.map((campus) => (
            <Grid item key={campus.id} xs={6} sm={6} md={4} lg={2}>
              <Card
                elevation={2}
                sx={{
                  backgroundColor: "#ffffff",
                  color: "#0c83c8",
                  padding: "1rem",
                  display: "flex",
                  minHeight: "200px",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography sx={{ textAlign: "center" }}>
                  {campus.name}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Card>
    </section>
  );
};

export default CampusCard;
