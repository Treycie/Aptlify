import React, { useEffect } from "react";

const useQueryPopular = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const baseUrl = "https://api.themoviedb.org/3";

  const fetchPopular = async () => {
    const url = `${baseUrl}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };

    const res = await (await fetch(url, options)).json();
    console.log(res.results);
    setPopularMovies(res.results);
  };
  useEffect(() => {
    fetchPopular();
  }, []);

  return { popularMovies};
};

export default useQueryPopular;
