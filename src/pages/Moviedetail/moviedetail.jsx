import React, {useState, useEffect} from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import axios from 'axios'; // For making API requests


const Moviedetail = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movieData, setMovieData] = useState(null);
  const [error, setError] = useState(null);

  const onSearchHandler = async () => {
    if (!searchTerm) {
      return;
    };

    try {
      // Replace the URL with the correct API endpoint
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=fc39126ceb1440435e56fd80d45edb04&query=${searchTerm}`);
      console.log(response.data);
      setMovieData(response.data.results[0]);
      setError(null)
    } catch (error) {
      console.error('Error fetching movie data:', error);
      setError(error.message);
      setMovieData(null);
    } finally {
      setSearchTerm("");
    }
  };

  return (
    <>
      <Navbar />
      <div className="h-screen bg-slate-800 w-full pt-5">
        <div className="w-full flex items-center justify-center">
          <input
            type="text"
            placeholder="Type a movie name..."
            id="uniqueId"
            className="text-[19px] mr-4 outline-none rounded-md p-2 w-[40%]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="border border-white rounded-md p-2 text-white font-bold w-20"
            onClick={onSearchHandler}
          >
            search
          </button>
        </div>

        {error && <p className="text-red-500">{error}</p>}
        
        {movieData && (
          <div className="mt-15 w-full flex items-center justify-center text-white font-bold">
            <div>
               <img
                src={`https://image.tmdb.org/t/p/w500${movieData.backdrop_path}`}
                alt={movieData.title}
                className="border border-white shadow-xl rounded-lg ml-24 pt-10 object-fit-cover h-96 w-full mt-24"
              />
            </div>
            <div className="ml-28 mt-10">
              <h1>Title: {movieData.title}</h1>
              <div className="pt-2" />
              <p>Genre: {movieData.genre_ids}</p>
              <div className="pt-2" />
              <p>Year: {movieData.release_date}</p>
              <div className="pt-2" />
              <p>Language: {movieData.original_language}</p>
              <div className="pt-2" />
              <p>Rating: {movieData.rating}</p>
              <div className="pt-2" />
              <p>Popularity: {movieData.popularity}</p>
              <div className="pt-2" />
              <h2>Overview
                <p>{movieData.overview}</p></h2>
              <div className="pt-2" />
              
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};
export default Moviedetail;