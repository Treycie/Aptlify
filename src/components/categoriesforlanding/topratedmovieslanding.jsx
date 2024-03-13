import React from 'react'
import useQueryToprated from "../../hooks/useQueryToprated";
import "../movielistlanding/movielistlanding.css";

const Topratedmovieslanding = () => {
    const { topratedMovies, isLoading } = useQueryToprated();
//   const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (scrollOffset) => {
    const container = document.querySelector('.custom-scrollbar');
    container.scrollLeft += scrollOffset;
  };

  return (
    
      <div className="text-white  top-0 left-0 right-0 z-20">
        <div className="text-white text-3xl font-bold mb-4">
          <h1>Top Rated Movies</h1>
        </div>
        <button variant="text" className="flex items-center gap-2">
          See More{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
        <div className="flex overflow-x-auto custom-scrollbar relative" style={{ scrollBehavior: "smooth" }}>
          {isLoading ? (
            <div>Loading</div>
          ) : (
            topratedMovies.map((movie, index) => (
              <div
                key={index}
                className="flex flex-col items-center mr-4 mb-4 relative"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                  alt={`${index}`}
                  className="max-w-xs"
                />
                <h1 className="text-white mt-2">{movie.title}</h1>
              </div>
            ))
          )}
        </div>
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white opacity-75 rounded-full p-2"
          onClick={() => handleScroll(-400)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M13.293 10.707a1 1 0 010-1.414l-4-4a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L13.293 10.707z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white opacity-75 rounded-full p-2"
          onClick={() => handleScroll(400)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6.707 10.707a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L9.414 10l3.707 3.707a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      

  );
};



export default Topratedmovieslanding