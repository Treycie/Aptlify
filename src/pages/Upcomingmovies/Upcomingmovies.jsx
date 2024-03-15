import React, { useEffect, useState } from "react";
import play from "../../assets/Images/play.svg";
import check from "../../assets/Images/check.svg";
import like from "../../assets/Images/like.svg";
import { FaStar } from "react-icons/fa";

const Upcomingmovies = () => {
  const [upcomingmovies, setUpcomingmovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hoveredMovie, setHoveredMovie] = useState(null);

  const fetchMovies = () => {
    setIsLoading(true);

    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=fc39126ceb1440435e56fd80d45edb04"
    )
      .then((response) => response.json())
      .then((data) => {
        setUpcomingmovies(data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handlePlayClick = (movieId) => {
    // You can navigate to the movie details page or play the movie here
    console.log("Play clicked for movie ID:", movieId);
  };

  const handleCheckClick = (movieId) => {
    // You can add the movie to the user's watchlist or mark it as watched
    console.log("Check clicked for movie ID:", movieId);
  };

  const handleLikeClick = (movieId) => {
    // You can add the movie to the user's liked list or implement a rating system
    console.log("Like clicked for movie ID:", movieId);
  };

  return (
    <>
      <div className="bg-black">
        <h1 className="text-white text-center text-3xl font-bold  my-4 padding-top: 3px padding-bottom: 3px">
          Upcoming Movies
        </h1>
        <div className="flex flex-wrap justify-center">
          {isLoading ? (
            <div>Loading</div>
          ) : (
            upcomingmovies.map((movie) => (
              <div
                key={movie.id}
                className="max-w-xs mx-4 my-4 relative"
                onMouseEnter={() => setHoveredMovie(movie.id)}
                onMouseLeave={() => setHoveredMovie(null)}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="rounded-lg shadow transition-all 2s hover:scale-105 hover:brightness-75"
                />
                {hoveredMovie === movie.id && (
                  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                    <span onClick={() => handlePlayClick(movie.id)}>
                      <img
                        src={play}
                        className="w-8 ml-3 rounded-full"
                        alt="Play"
                      />
                    </span>
                    <span onClick={() => handleCheckClick(movie.id)}>
                      <img
                        src={check}
                        className="w-8 ml-3 rounded-full"
                        alt="Check"
                      />
                    </span>
                    <span onClick={() => handleLikeClick(movie.id)}>
                      <img
                        src={like}
                        className="w-8 ml-3 rounded-full"
                        alt="Like"
                      />
                    </span>
                    <FaStar className="text-yellow-600 ml-3" />
                  </div>
                )}
                <p className="mt-2 text-center text-2xl font-bold text-white">{movie.title}</p>
                {/* <p>{movie.vote_average}</p> */}
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};
export default Upcomingmovies;
