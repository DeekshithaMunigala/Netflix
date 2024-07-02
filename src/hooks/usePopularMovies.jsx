import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { options } from "../utils/constants";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getPopularMovies();
  }, []);

  const getPopularMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      options
    );
    const data = await response.json();

    dispatch(addPopularMovies(data.results));
  };
};

export default usePopularMovies;
