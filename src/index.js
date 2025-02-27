import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./styles/index.css";
import App from "./components/App";
import CertificateVerify from "./components/CertificateVerify";

const theme = createTheme();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/certificate-verification" element={<CertificateVerify/>} />
          </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
