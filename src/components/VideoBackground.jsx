import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { useEffect } from "react";
import { addTrailer } from "../utils/moviesSlice";

const VideoBackground = ({ movie_id }) => {
  const dispatch = useDispatch();

  const id = useSelector((store) => store?.movies?.trailerVideo?.key);
  // console.log(id);

  const getMovieVideos = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`,
      options
    );

    const movie = await response.json();
    // console.log(movie);

    const filterData = movie.results.filter((each) => each.type === "Teaser");
    // console.log("trailer: ", filterData);

    const teaser = filterData.length ? filterData[0] : movie.results[0];

    dispatch(addTrailer(teaser));
    // console.log(teaser);
  };

  useEffect(() => {
    getMovieVideos();
  }, [movie_id]);

  return (
    <div className="w-screen">
      <iframe
        className="w-[95vw] mx-auto aspect-video"
        src={"https://www.youtube.com/embed/" + id + "?autoplay=1&&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        // allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
