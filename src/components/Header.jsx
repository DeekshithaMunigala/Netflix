import logo from "../assets/Netflix_Logo.png";
// import { LuLanguages } from "react-icons/lu";
// import { MdOutlineArrowDropDown } from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import GetCountriesAndStates from "./GetCountriesAndStates";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  // console.log("user header:", user);

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error.code);
      });
  };

  return (
    <div className="relative">
      <nav className=" py-2 px-28 absolute z-10 flex justify-between items-center mx-auto right-0 left-0 bg-gradient-to-b from-black">
        <img className="w-48 h-[75px]" src={logo} alt="Netflix_Logo" />
        {user && (
          <div className="flex items-center">
            <GetCountriesAndStates />
            <img
              className="w-8 h-8 mr-5 rounded-full cursor-pointer"
              src={user.photoURL}
              alt="photo"
            />
            <button
              className="text-xs px-4 py-2 rounded bg-[#db0000] text-white font-semibold"
              onClick={handleSignOut}
            >
              Sign out
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
