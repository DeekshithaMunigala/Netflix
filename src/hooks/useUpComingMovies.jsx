import { useDispatch } from "react-redux";
import { addUpComingMovies } from "../utils/moviesSlice";
import { options } from "../utils/constants";
import { useEffect } from "react";

const useUpComingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getUpComingMovies();
  }, []);

  const getUpComingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      options
    );
    const data = await response.json();
    // console.log(data.results);

    dispatch(addUpComingMovies(data.results));
  };
};

export default useUpComingMovies;
