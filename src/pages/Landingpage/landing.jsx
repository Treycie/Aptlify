import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Hero from "../../components/Hero/hero";
import Footer from "../../components/Footer/footer";
import Moviedetail from "../Moviedetail/moviedetail";

const Landing = () => {
  return <div>
    <Navbar/>
    <Hero/>
    <Moviedetail/>
    <Footer/>
  </div>;
};

export default Landing;
