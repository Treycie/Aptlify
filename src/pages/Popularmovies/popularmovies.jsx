import { useEffect, useState } from "react";
import play from "../../assets/Images/play.svg";
import check from "../../assets/Images/check.svg";
import like from "../../assets/Images/like.svg";
import { FaStar } from "react-icons/fa";

const Popularmovies = () => {
  const [topratedmovies, setPopularmovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hoveredMovie, setHoveredMovie] = useState(null);

  const fetchMovies = () => {
    setIsLoading(true);

    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=fc39126ceb1440435e56fd80d45edb04"
    )
      .then((response) => response.json())
      .then((data) => {
        setPopularmovies(data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <div className="bg-gray-900">
        <h1 className="text-white text-center text-3xl my-4 padding-top: 3px padding-bottom: 3px">
          Popular Movies List
        </h1>
        <div className="flex flex-wrap justify-center">
          {isLoading ? (
            <div>Loading</div>
          ) : (
            topratedmovies.map((movie) => (
              <div
                key={movie.id}
                className="max-w-xs mx-4 my-4 relative"
                onMouseEnter={() => setHoveredMovie(movie.id)}
                onMouseLeave={() => setHoveredMovie(null)}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="rounded-lg  shadow transition-all 2s hover:scale-105 hover:brightness-75"
                />
                {hoveredMovie === movie.id && (
                  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                    <span>
                      <img src={play} alt="Play Icon" className="w-8 ml-3 rounded-full" />
                    </span>
                    <span>
                      <img src={check} alt="Check Icon" className="w-8 ml-3 rounded-full" />
                    </span>
                    <span>
                      <img src={like} alt="Like Icon" className="w-8 ml-3 rounded-full" />
                    </span>
                    <FaStar className="text-yellow-600 ml-3" />
                  </div>
                )}
                <p className="mt-2 text-center text-white">{movie.title}</p>
                {/* <p>{movie.vote_average}</p> */}
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Popularmovies;


// // import React from "react";
// import { useEffect, useState } from "react";

// const Popularmovies = () => {
//   const [popularmovies, setPopularmovies] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const fetchMovies = () => {
//     setIsLoading(true);

//     fetch(
//       "https://api.themoviedb.org/3/movie/popular?api_key=fc39126ceb1440435e56fd80d45edb04"
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         setPopularmovies(data.results);
//         console.log(data.results);
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   useEffect(() => {
//     fetchMovies();
//   }, []);

//   return (
//     <div className="flex flex-wrap justify-center">
//       {isLoading ? (
//         <div>Loading</div>
//       ) : (
//         popularmovies.map((movie) => (
//           <div key={movie.id} className="max-w-xs mx-4 my-4">
//             <img
//               src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
//               alt={movie.title}
//               className="rounded-lg"
//             />
//             <p className="mt-2 text-center">{movie.title}</p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default Popularmovies;
