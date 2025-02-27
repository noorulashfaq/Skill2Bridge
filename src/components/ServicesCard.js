import React, { useState } from "react";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Box,
  Pagination,
} from "@mui/material";

const services = [
  { title: "Diploma in Computer Hardware Engineering" },
  { title: "Diploma in Computer Science" },
  { title: "Diploma in Computer Hardware and Networking" },
  { title: "Diploma in Graphic Designing" },
  { title: "Diploma in Multimedia, Animation & Video Editing" },
  { title: "Diploma in Web Designing" },
  { title: "Diploma in Software Engineering" },
  { title: "Diploma in Fire and Safety Management" },
  { title: "Diploma in Hotel and Catering Management" },
  { title: "Diploma in Business Management" },
  { title: "Diploma in Psychology" },
  { title: "Diploma in HR Management" },
  { title: "Diploma in Journalism & Mass Communication" },
  { title: "Diploma in Library & Information Science" },
  { title: "Diploma in Travel & Tourism Management" },
  { title: "Diploma in Hospitality & Tourism Management" },
  { title: "Diploma in Industrial Safety & Disaster Management" },
  { title: "Diploma in Building and Construction" },
  { title: "Diploma in Photography" },
  { title: "Diploma in Sports Nutrition" },
  { title: "Diploma in Gardening" },
  { title: "Diploma in Social Work" },
  { title: "Diploma in Makeup & Hair Dressing" },
  { title: "Diploma in Material Management" },
  { title: "Diploma in Digital Marketing" },
  { title: "Diploma in Beauty Parlour" },
  { title: "Diploma in Tailoring" },
  { title: "Diploma in Civil Construction Supervision" },
  { title: "Diploma in Tourism Management" },
  { title: "Diploma in Export and Import Management" },
  { title: "Diploma in Hotel Management" },
  { title: "Diploma in Hospitality Management" },
  { title: "Diploma in Import & Export" },
  { title: "Diploma in HR Executive" },
  { title: "Diploma in Contract Management" },
  { title: "Diploma in Agriculture & Plantation Management" },
  { title: "Diploma in Fashion Technology" },
  { title: "Diploma in Plumbing" },
  { title: "Diploma in Surveying" },
  { title: "Diploma in Logistics" },
  { title: "Diploma in Beauty Care" },
  { title: "Diploma in Cosmetology & Beauty Parlour Management" },
  { title: "Diploma in Garment Export Management" },
  { title: "Diploma in Caregiving" },
  { title: "Diploma in Tourist Guiding" },
  { title: "Diploma in Hair Styling" },
  { title: "Diploma in Barbering" },
  { title: "Diploma in Professional Makeup" },
  { title: "Diploma in Senior Beauty Therapy" },
  { title: "Diploma in Housekeeping & Laundry Operations" },
  { title: "Diploma in Pre-School & Primary Teacher Training" },
  { title: "Diploma in Physical and Sports Trainer" },
  { title: "Diploma in Physical Education Teacher" },
  { title: "Diploma in Primary Teacher Training" },
  { title: "Diploma in School Operation & Management" },
  { title: "Diploma in Early Childhood Care and Education" },
  { title: "Diploma in Montessori Teacher Training" },
  { title: "Diploma in Nursery Teacher Training" },
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
          Our Diploma Programmes
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
                  {/* <Box mt={2}>
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
                  </Box> */}
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
