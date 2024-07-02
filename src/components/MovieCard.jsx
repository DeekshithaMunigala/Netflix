import { image_url } from "../utils/constants";

const MovieCard = ({ poster }) => {
  if (!poster) return null;
  return (
    <div className=" w-36 pr-4">
      <img src={image_url + poster} alt="" />
    </div>
  );
};

export default MovieCard;
