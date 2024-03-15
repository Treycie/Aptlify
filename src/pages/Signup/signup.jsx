import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="/"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[500px] mx-auto bg-black/90 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              <form
                // onSubmit={handleSubmit}
                className="w-full flex flex-col py-4"
              >
                <input
                  // onChange={(e) => setEmail(e.target.value)}
                  className="p-3 my-2 bg-white-700 text-black rouded"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                />
                <input
                  // onChange={(e) => setPassword(e.target.value)}
                  className="p-3 my-2 bg-white-700 text-black rouded"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />

                <input
                  // onChange={(e) => setPassword(e.target.value)}
                  className="p-3 my-2 bg-white-700 text-black rouded"
                  type=" Confirm password"
                  placeholder="Confirm Password"
                  autoComplete="current-password"
                />
                <button className="bg-red-600 py-3 my-6 rounded font-bold" onClick={() => navigate('/getstarted/signup')}>
                  Sign Up
                </button>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input className="mr-2" type="checkbox" />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
