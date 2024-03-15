
import React, { useState } from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import love from "../../assets/Images/love.svg";
import add from "../../assets/Images/add.svg";
import star from "../../assets/Images/star.svg";
import axios from 'axios'; // For making API requests

const genreId = {
  28: 'Action',
  12: 'Adventure',
  16: 'Animation',
  35: 'Comedy',
  80: 'Crime',
  99: 'Documentary',
  18: 'Drama',
  10751: 'Family',
  14: 'Fantasy',
  36: 'History',
  27: 'Horror',
  10402: 'Music',
  9648: 'Mystery',
  10749: 'Romance',
  878: 'Science Fiction',
  10770: 'TV Movie',
  53: 'Thriller',
  10752: 'War',
  37: 'Western'
};

const getGenreNames = (genreIds) => {
  console.log(genreIds)
  return genreIds?.map((id) => genreId[id] || "Unknown Genre");
};

const Moviedetail = () => {
  const {results} = useQueryPopular();
  const [searchTerm, setSearchTerm] = useState("");
  const [movieData, setMovieData] = useState(null);
  const [error, setError] = useState(null);
  const genres = getGenreNames(movieData?.genre_ids);

  const onSearchHandler = async () => {
    if (!searchTerm) {
      return;
    };

    try {
      // Replace the URL with the correct API endpoint
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=fc39126ceb1440435e56fd80d45edb04&query=${searchTerm}`);
      console.log(response.data);
      setMovieData(response.data.results[0]);
      // console.log(movieData)

      setError(null)
    } catch (error) {
      console.error('Error fetching movie data:', error);
      setError(error.message);
      setMovieData(null);
    } finally {
      setSearchTerm("");
    }
  };
  // {console.log(genres)}

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
                src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
                alt={movieData.title}
                className="border border-white shadow-xl rounded-lg ml-24 object-fill h-auto w-full mt-24"
              />
            </div>
            <div className="ml-28 mt-16">
              <h1>Title: {movieData.title}</h1>
              <div className="pt-2" />
              <p>Genres: {genres.join(', ')}</p>
              <div className="pt-2" />
              <p>Year: {movieData.release_date}</p>
              <div className="pt-2" />
              <p>Language: {movieData.original_language}</p>
              <div className="pt-2" />
              <p>Rating: {movieData.vote_average}</p>
              <div className="pt-2" />
              <p>Popularity: {movieData.popularity}</p>
              <div className="pt-2" />
              <h2>Overview
                <p>{movieData.overview}</p></h2>
              <div className="pt-12" /> 

              <div className="flex"> 
              <button className="w-44 border bg-transparent hover:bg-white rounded-lg hover:text-black">Watch </button>
              <button><img src={love} alt="love-icon" className="w-8 ml-3 rounded-full hover:bg-none" /></button>
              <button><img src={add} alt="add-icon" className="w-8 ml-3 rounded-full hover:bg-none" /></button>
              <button><img src={star} alt="star-icon" className="w-8 ml-3 rounded-full hover:bg-none" /></button>
              </div>
          
            </div>
            
          </div>
 
        )}
       
      </div>
      <Footer />
    </>
  );
};
export default Moviedetail;