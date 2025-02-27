import React from "react";
import About from "./About";
import ServicesCard from "./ServicesCard";
import TrainingCards from "./TrainingCards";
import Home from "./Home";
import AdmissionForm from "./AdmissionForm";
import Programmes from "./Programmes";
import NavBar from "./Navbar";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <ServicesCard />
      <Programmes />
      <TrainingCards />
      <AdmissionForm />
      <Footer />
    </div>
  );
};

export default App;
