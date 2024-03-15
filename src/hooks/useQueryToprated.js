import { useEffect, useState } from "react";

const useQueryToprated = () => {
  const [topratedMovies, setTopratedMovies] = useState([]);
  const baseUrl = "https://api.themoviedb.org/3";

  const fetchToprated = async () => {
    const url = `${baseUrl}/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=2`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };

    const res = await (await fetch(url, options)).json();
    console.log(res.results);
    setTopratedMovies(res.results);
  };
  useEffect(() => {
    fetchToprated();
  }, []);

  return { topratedMovies};
};

export default useQueryToprated;
