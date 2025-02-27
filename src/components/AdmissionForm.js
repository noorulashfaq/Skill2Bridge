import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  MenuItem,
  Select,
  Grid,
  InputLabel,
} from "@mui/material";

// Styled File Upload Container
// const FileUploadContainer = styled(Box)({
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   border: "2px dashed #1976d2",
//   borderRadius: "8px",
//   padding: "10px",
//   textAlign: "center",
//   cursor: "pointer",
//   transition: "0.3s",
//   "&:hover": {
//     backgroundColor: "#f0f8ff",
//   },
// });

// Styled File Input (Hidden)
// const HiddenInput = styled("input")({
//   display: "none",
// });

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    fatherName: "",
    dob: "",
    email: "",
    phone: "",
    address: "",
    stream: "",
    courseType: "",
    ugCourse: "",
    pgCourse: "",
    ddeBachelor: "",
    ddeMaster: "",
    advDiploma: "",
    diploma: "",
    // documents: {
    //   aadharCard: null,
    //   tenthMarksheet: null,
    //   twelfthMarksheet: null,
    //   ugDetails: null,
    //   photo: null,
    //   signature: null,
    // },
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleFileChange = (e) => {
  //   const { name, files } = e.target;
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     documents: { ...prevState.documents, [name]: files[0] },
  //   }));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <section className="admission-section">
        <Container maxWidth="md" sx={{ mt: 5, mb: 5, p: 3, bgcolor: "#f9f9f9", borderRadius: 2, boxShadow: 3 }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: "bold", color: "#1A2A4F" }}>
        Admission Form 
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          {/* Personal Details */}
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Full Name" name="fullName" onChange={handleChange} required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Father Name" name="fatherName" onChange={handleChange} required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth type="date" label="Date of Birth" name="dob" onChange={handleChange} required InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="E-mail" type="email" name="email" onChange={handleChange} required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Phone Number" name="phone" onChange={handleChange} required />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Address" name="address" multiline rows={3} onChange={handleChange} required />
          </Grid>

          {/* Stream Selection */}
          <Grid item xs={12}>
            <FormControl fullWidth>
              <FormLabel>Select Stream</FormLabel>
              <RadioGroup row name="stream" onChange={handleChange}>
                <FormControlLabel value="Regular" control={<Radio />} label="Regular Course" />
                <FormControlLabel value="Online" control={<Radio />} label="Online Course (LMS)" />
              </RadioGroup>
            </FormControl>
          </Grid>

          {/* Course Selection */}
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Select Course Type</InputLabel>
              <Select name="courseType" value={formData.courseType} onChange={handleChange}>
                <MenuItem value="UG">UG</MenuItem>
                <MenuItem value="PG">PG</MenuItem>
                <MenuItem value="Diploma">Diploma</MenuItem>
                {/* <MenuItem value="Advanced Diploma">Advanced Diploma</MenuItem> */}
              </Select>
            </FormControl>
          </Grid>

          {/* Course Specific Selection */}
          {formData.courseType === "UG" && (
            <Grid item xs={12}>
              <TextField fullWidth label="UG Course" name="ugCourse" onChange={handleChange} />
            </Grid>
          )}
          {formData.courseType === "PG" && (
            <Grid item xs={12}>
              <TextField fullWidth label="PG Course" name="pgCourse" onChange={handleChange} />
            </Grid>
          )}
          {formData.courseType === "Diploma" && (
            <Grid item xs={12}>
              <TextField fullWidth label="Diploma Course" name="diploma" onChange={handleChange} />
            </Grid>
          )}
          {/* {formData.courseType === "Advanced Diploma" && (
            <Grid item xs={12}>
              <TextField fullWidth label="Advanced Diploma Course (2 Years)" name="advDiploma" onChange={handleChange} />
            </Grid>
          )} */}

          {/* File Uploads */}
          {/* {[
            { label: "Aadhar Card", name: "aadharCard" },
            { label: "10th Marksheet", name: "tenthMarksheet" },
            { label: "12th Marksheet", name: "twelfthMarksheet" },
            { label: "UG Details", name: "ugDetails" },
            { label: "Photo", name: "photo" },
            { label: "Student Signature", name: "signature" },
          ].map((file, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <FileUploadContainer>
                <FormLabel>{file.label}</FormLabel>
                <HiddenInput type="file" name={file.name} id={file.name} onChange={handleFileChange} />
                <label htmlFor={file.name}>
                  <Button variant="contained" component="span" sx={{ mt: 1, bgcolor: "#1A2A4F" }}>
                    Upload File
                  </Button>
                </label>
                {formData.documents[file.name] && (
                  <Typography variant="caption" color="green" sx={{ mt: 1 }}>
                    {formData.documents[file.name].name}
                  </Typography>
                )}
              </FileUploadContainer>
            </Grid>
          ))} */}

          {/* Submit Button */}
          <Grid item xs={12} textAlign="center">
            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2, fontSize: "16px", px: 4, py: 1, bgcolor: "#1A2A4F" }}>
              Submit Application
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
    </section>
  );
};

export default AdmissionForm;
