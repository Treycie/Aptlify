import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Hero from "../../components/Hero/hero";
import Footer from "../../components/Footer/footer";
import ScrollToTopButton from "../../components/scrolltotopbutton/Scrolltotopbutton"; // Adjust the path accordingly
import Movielistlanding from "../../components/movielistlanding/movielistlanding";

const Landing = () => {
 
  return (
    <div>
      <Navbar />
      <Hero />
      {/* Scroll to Top Button */}
      <ScrollToTopButton />
      <Movielistlanding/>
      <Footer />
    </div>
  );
};

export default Landing;
