import React, { useState } from "react";
import {
  Container,
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Nav from "./Nav";
import Footer from "./Foot";
import emailjs from "emailjs-com";

const CertificateVerification = () => {
  const [formData, setFormData] = useState({
    requesterName: "",
    requesterEmail: "",
    purpose: "",
    candidateName: "",
    candidateRegNo: "",
    certificateNo: "",
    candidateEmail: "",
    issueDate: "",
    certificateFile: null,
  });

  const handleDialogClose = () => {
    setDialogOpen(false);
    if (dialogMessage === "Email sent successfully!") {
      window.location.assign("/certificate-verification");
    }
  };

  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, certificateFile: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    console.log(formData);
      emailjs
        .send("ABC", "ABC", formData, "ABC")
        .then(
          (response) => {
            console.log("Email sent successfully:", response);
            setDialogMessage("Email sent successfully!");
            setDialogOpen(true);
          },
          (error) => {
            console.error("Error sending email:", error);
            setDialogMessage("Failed to send email. Please try again later.");
            setDialogOpen(true);
          }
        );
  };

  return (
    <div>
      <Nav />
      <Container maxWidth="lg" sx={{ mt: 5 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: "bold", textAlign: "center" }}
          >
            Certificate Verification
          </Typography>
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Requester Name"
              name="requesterName"
              value={formData.requesterName}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Requester Email"
              name="requesterEmail"
              value={formData.requesterEmail}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Purpose of Verification"
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Candidate Name"
              name="candidateName"
              value={formData.candidateName}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Candidate Registration No."
              name="candidateRegNo"
              value={formData.candidateRegNo}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Certificate No."
              name="certificateNo"
              value={formData.certificateNo}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Candidate Email"
              name="candidateEmail"
              value={formData.candidateEmail}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Certificate Issued Date"
              type="date"
              name="issueDate"
              value={formData.issueDate}
              onChange={handleChange}
              margin="normal"
            />
            <Button
              variant="contained"
              component="label"
              sx={{
                mt: 2,
                bgcolor: "#002147",
                "&:hover": {
                  bgcolor: "#1A2A4F",
                },
              }}
              startIcon={<CloudUploadIcon />}
            >
              Upload Certificate
              <input type="file" hidden onChange={handleFileChange} />
            </Button>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt: 2,
                bgcolor: "#002147",
                "&:hover": {
                  bgcolor: "#1A2A4F",
                },
              }}
            >
              Submit
            </Button>
          </Box>
        </Paper>
      </Container>
      <Dialog
              open={dialogOpen}
              onClose={handleDialogClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{"Contact Form"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  {dialogMessage}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleDialogClose} autoFocus>
                  OK
                </Button>
              </DialogActions>
            </Dialog>
      <Footer />
    </div>
  );
};

export default CertificateVerification;
