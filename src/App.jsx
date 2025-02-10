import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Goals from "./components/Goals";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Hero />
      <Goals />
      <AboutUs />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
