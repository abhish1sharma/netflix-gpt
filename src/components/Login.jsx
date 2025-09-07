import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  // console.log("islogin>>", isLoginPage);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    // signin/signup
    if (!isLoginPage) {
      // Signup
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/49032373?v=4",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = user;
              dispatch(addUser({ uid, email, displayName, photoURL }));
              navigate("/browse");
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + "-" + errorMessage);
            });
          console.log("user>>", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Signin
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("user>>", user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSigninForm = () => {
    setIsLoginPage((prev) => !prev);
  };
  return (
    <div>
      <Header />
      <div>
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8d617e19-3c3c-4c28-8998-c9b14dbc7200/web/IN-en-20250901-TRIFECTA-perspective_48d84d4e-9558-46b8-a0f3-8b2dc8478431_large.jpg"
          alt="Background netflix"
        />
      </div>

      <form
        className="w-1/4 bg-black opacity-75  absolute top-1/2 left-1/2 -translate-1/2 text-white p-16 flex justify-center items-start flex-col rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-2xl self-start ml-3 mb-5">
          {isLoginPage ? "Sign In" : "Sign Up"}
        </h1>
        {!isLoginPage && (
          <input
            type="text"
            placeholder="Name"
            className="p-2 my-2 border border-white rounded-sm w-full bg-black opacity-80"
            id="text"
            ref={name}
          />
        )}

        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-2 border border-white rounded-sm w-full bg-black opacity-80"
          id="email"
          ref={email}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2  my-2 border border-white rounded-sm w-full bg-black opacity-80"
          id="password"
          ref={password}
        />
        <p className="text-red-400 font-bold text-lg">{errorMessage}</p>
        <button
          className="px-18 py-2 my-2   text-white bg-red-500 rounded-sm w-full"
          onClick={handleButtonClick}
        >
          {isLoginPage ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer mt-2" onClick={toggleSigninForm}>
          {isLoginPage
            ? "New to Netflix? Sign up Now "
            : "Already a member? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
