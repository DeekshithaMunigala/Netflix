import { IoCaretForwardCircle } from "react-icons/io5";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute text-white pt-[20%] w-screen aspect-video px-24 ">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="text-lg font-semibold py-6 w-2/4">{overview}</p>
      <div className="flex flex-row items-center justify-start font-semibold">
        <button className="flex items-center bg-gray-300 text-black text-xl px-2 py-1 mr-4 rounded">
          <span className="mr-2 py-auto">
            <IoCaretForwardCircle />
          </span>
          <span>Play Now</span>
        </button>
        <button className="bg-gray-300 text-black text-xl px-2 py-1 m-4 rounded">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
