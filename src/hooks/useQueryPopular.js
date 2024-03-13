import  { useState,useEffect } from "react";

const useQueryPopular = () => {
  const [ popularMovies, setPopularMovies] = useState([]);
const [isLoading, setIsLoading] = useState(false);
  const baseUrl = "https://api.themoviedb.org/3";

  const fetchPopular = async () => {
    try {
    const url = `${baseUrl}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };
    setIsLoading(true)

    const res = await fetch(url, options);
      const results = (await res.json()).results;

      console.log(results);
      setPopularMovies(results);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPopular();
  }, []);
  return { popularMovies, isLoading};
};

export default useQueryPopular;
