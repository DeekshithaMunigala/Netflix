import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movie = useSelector((store) => store.movies?.nowPlayingMovies);
  if (movie === null) return;

  const mainMovie = movie[0];
  const { id, overview, original_title } = mainMovie;

  return (
    <div className=" pt-20 ">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movie_id={id} />
    </div>
  );
};

export default MainContainer;
