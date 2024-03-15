import React, { useState } from "react";
// import Footer from "../../components/Footer/footer";
// import Navbar from "../../components/Navbar/navbar";
import { useLocation, useParams } from "react-router";

const Moviedetail = () => {
  const location = useLocation();
  const movie = location.state.movie;
  console.log(movie);

  return (
    <>
      <div className="min-h-screen w-full mt-0 bg-black">
        <div className="mt-0 flex items-center justify-center text-white text-2xl font-bold">
          <div className="mt-10 ml-10">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={`movie`}
            className="max-w-xs transition-opacity hover:opacity-20"
          />
          </div>
          <div className="ml-28 mt-16">
              <h1>Title: {movie.title}</h1>
              <div className="pt-2" />
              {/* <p>Genres: {genres.join(', ')}</p> */}
              <div className="pt-2" />
              <p>Year: {movie.release_date}</p>
              <div className="pt-2" />
              <p>Language: {movie.original_language}</p>
              <div className="pt-2" />
              <p>Rating: {movie.vote_average}</p>
              <div className="pt-2" />
              <p>Popularity: {movie.popularity}</p>
              <div className="pt-2" />
              <h2>Overview
                <p>{movie.overview}</p></h2>
              <div className="pt-12" />

          </div>
        </div>
      </div>
    </>
  );
};
export default Moviedetail;
