import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Hero from "../../components/Hero/hero";
import Footer from "../../components/Footer/footer";
import ScrollToTopButton from "../../components/scrolltotopbutton/Scrolltotopbutton"; // Adjust the path accordingly
import Topratedlanding from "../../components/topratedlanding/topratedlanding";

const Landing = () => {
 
  return (
    <div>
      <Navbar />
      <Hero />
      {/* Scroll to Top Button */}
      <ScrollToTopButton />
      <Topratedlanding/>
      <Footer />
    </div>
  );
};

export default Landing;
