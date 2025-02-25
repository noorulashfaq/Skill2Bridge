import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./styles/index.css";
import NavBar from "./components/Navbar";
import About from "./components/About";
import ServicesCard from "./components/ServicesCard";
import TrainingCards from "./components/TrainingCards";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import AdmissionForm from "./components/AdmissionForm";
import Programmes from "./components/Programmes";

const theme = createTheme();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Home />
        <About />
        <ServicesCard />
        <Programmes />
        <AdmissionForm />
        <TrainingCards />
        <Contact />
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
