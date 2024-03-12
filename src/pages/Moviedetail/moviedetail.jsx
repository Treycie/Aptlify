import React, { useState } from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";

const Moviedetail = () => {
  const {results} = useQueryPopular();

  return (
    <>
      <Navbar />
      <div>Moviedetail</div>
      <Footer />
    </>
  );
};

export default Moviedetail;
