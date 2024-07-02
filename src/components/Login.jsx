import { useRef, useState } from "react";
import Header from "./Header";
import { getAuth, updateProfile } from "firebase/auth";
import backgroundImage from "../assets/Background_image.jpg";
import checkValidData from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;

    const message = checkValidData(emailValue, passwordValue);

    if (message) {
      setErrorMessage(message);
      return;
    }

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          const auth = getAuth();

          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPEeLPFIR09EBr4pMhBktx0JHZ18Q97aKtZVwij0-q7UlX22nma9DudoO6ReoYiiueG9E&usqp=CAU",
          })
            .then(() => {
              // console.log("Profile Updated");

              const { uid, displayName, email, photoURL } = user;

              // console.log(user);

              dispatch(
                addUser({
                  uid: uid,
                  displayName: displayName,
                  email: email,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch(() => {
              setErrorMessage("User not valid");
            });
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          // console.log(user);

          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
          setIsSignInForm(false);
        });
    }
  };

  return (
    <>
      <div>
        <Header />
        <div className="absolute">
          <img
            className="bg-cover"
            src={backgroundImage}
            alt="background-image"
          />
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="border border-black absolute z-20 mx-auto right-0 left-0 my-24 w-[450px] px-[68px] py-[48px] bg-black opacity-80 text-white rounded-md"
        >
          <h1 className="font-bold text-3xl mb-6">
            {isSignInForm ? `Sign In` : `Sign Up`}
          </h1>

          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full name"
              className=" bg-transparent border border-gray-50 rounded py-3 pl-4 pb-2 w-full mb-5"
            />
          )}

          <input
            ref={email}
            type="email"
            placeholder="Email or mobile number"
            className=" bg-transparent border border-gray-50 rounded py-3 pl-4 pb-2 w-full mb-5"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className=" bg-transparent border border-gray-50 rounded py-3 pl-4 pb-2 w-full mb-2"
          />

          <p className="text-[#eb3942] text-sm tracking-wide mb-5">
            {errorMessage}
          </p>

          <button
            className="bg-[#db0000] py-[8px] w-full text-center rounded font-bold"
            onClick={handleButtonClick}
          >
            {isSignInForm ? `Sign In` : `Sign up`}
          </button>

          <p className="text-gray font-light mt-5" onClick={toggleSignInForm}>
            {isSignInForm
              ? `New to Netflix? Sign up now.`
              : `Already a member? Sign In now.`}
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
