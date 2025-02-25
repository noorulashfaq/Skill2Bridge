import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Box,
  Pagination,
} from "@mui/material";

const services = [
  { title: "B.Voc in Medical Lab Technology", link: "/B-Voc-in-Medical-Lab-Technology" },
  { title: "B.Voc in Radiology & Medical Imaging Technology", link: "/B-Voc-in-Radiology-Medical-Imaging" },
  { title: "B.Voc in Optometry Technology", link: "/B-Voc-in-Optometry-Technology" },
  { title: "B.Voc in Operation Theatre Technology", link: "/B-Voc-in-Operation-Theatre-Technology" },
  { title: "B.Voc in Dialysis Technology", link: "/B-Voc-in-Dialysis-Technology" },
  { title: "B.Voc in Cardiac Care Technology", link: "/B-Voc-in-Cardiac-Care-Technology" },
  { title: "B.Voc in Hospital Sterilization Technology", link: "/B-Voc-in-Hospital-Sterilization-Technology" },
  { title: "B.Voc in Patient Care Management", link: "/B-Voc-in-Patient-Care-Management" },
  { title: "B.Voc in Physiotherapy", link: "/B-Voc-in-Physiotherapy" },
  { title: "B.Voc in Yoga & Naturopathy", link: "/B-Voc-in-Yoga-Naturopathy" },
  { title: "B.Voc in Computer Software Technology", link: "/B-Voc-in-Computer-Software-Technology" },
  { title: "B.Voc in Information Technology", link: "/B-Voc-in-Information-Technology" },
  { title: "B.Voc in Multimedia & Animation", link: "/B-Voc-in-Multimedia-Animation" },
  { title: "B.Voc in E-commerce and Digital Marketing", link: "/B-Voc-in-E-commerce-Digital-Marketing" },
  { title: "B.Voc in Library Science", link: "/B-Voc-in-Library-Science" },
  { title: "B.Voc in Fine Arts", link: "/B-Voc-in-Fine-Arts" },
  { title: "B.Voc in Beauty Science & Cosmetology", link: "/B-Voc-in-Beauty-Science-Cosmetology" },
  { title: "B.Voc in Fashion Designing", link: "/B-Voc-in-Fashion-Designing" },
  { title: "B.Voc in Physical & Fitness Training", link: "/B-Voc-in-Physical-Fitness-Training" },
  { title: "B.Voc in Hotel Management", link: "/B-Voc-in-Hotel-Management" },
  { title: "B.Voc in Marketing and Entrepreneurship", link: "/B-Voc-in-Marketing-Entrepreneurship" },
  { title: "M.Voc in Hospital Management", link: "/M-Voc-in-Hospital-Management" },
  { title: "M.Voc in Computer Software Technology", link: "/M-Voc-in-Computer-Software-Technology" },
];

const itemsPerPage = 8;

const ServicesCard = () => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(services.length / itemsPerPage);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const displayedServices = services.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="bvoc-section">
      <Box sx={{ padding: "4rem 2rem", background: "linear-gradient(135deg, #0B1F3B 0%, #1A2A4F 100%)" }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" color="#E8C27D" mb={4}>
          Bachelor of Vocational Program (B.VOC)
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {displayedServices.map((service, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Card
                elevation={6}
                sx={{
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  textAlign: "center",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <Typography variant="h6" fontWeight="bold" color="#1A2A4F">
                    {service.title}
                  </Typography>
                  <Box mt={2}>
                    <Link
                      to={service.link}
                      style={{
                        textDecoration: "none",
                        backgroundColor: "#E8C27D",
                        color: "#0B1F3B",
                        fontWeight: "bold",
                        padding: "8px 16px",
                        borderRadius: "6px",
                        display: "inline-block",
                        transition: "background 0.3s ease",
                      }}
                      onMouseEnter={(e) => (e.target.style.backgroundColor = "#C7A062")}
                      onMouseLeave={(e) => (e.target.style.backgroundColor = "#E8C27D")}
                    >
                      Read More →
                    </Link>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        {/* Pagination Controls */}
        <Box display="flex" justifyContent="center" mt={4}>
          <Pagination count={totalPages} page={page} onChange={handleChange} sx={{ "& .MuiPaginationItem-root": { color: "#E8C27D" } }} />
        </Box>
      </Box>
    </section>
  );
};

export default ServicesCard;
