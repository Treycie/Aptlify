import { useEffect, useState } from "react";

const useQueryUpcoming = () => {
  const [upcomingMovies, setupcomingMovies] = useState([]);
  const baseUrl = "https://api.themoviedb.org/3";

  const fetchUpcoming = async () => {
    const url = `${baseUrl}/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=3`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };

    const res = await (await fetch(url, options)).json();
    console.log(res.results);
    setupcomingMovies(res.results);
  };
  useEffect(() => {
    fetchUpcoming();
  }, []);

  return { upcomingMovies};
};

export default useQueryUpcoming;
