import React from "react";
const Hero = () => {
  return (
    <div
      className="hero min-h-screen flex items-center"
      style={{
        backgroundImage: `url(${require("../../assets/Images/hero-bg.jpg")})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content flex flex-col justify-center items-center text-neutral-content h-full">
        <div className="max-w-md">
          <h1
            className="mb-100 text-5xl font-bold ml-4"
            style={{ fontSize: "1.5rem", color: "red" }}
          >
            APTLIFY
          </h1>
          <p
            className="font-bold ml-4 whitespace-nowrap"
            style={{ fontSize: "3.8rem", color: "white" }}
          >
            Unlimited Movies,
          </p>
          <p
            className="mb-10 font-bold ml-4 whitespace-nowrap"
            style={{ fontSize: "3.8rem", color: "white" }}
          >
            TV Shows,& More.
          </p>
          <button
            type="button"
            class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800 ml-4"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
