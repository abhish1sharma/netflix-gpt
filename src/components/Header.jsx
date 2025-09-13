import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LANGUAGES, netflixLogo } from "../utils/constants";
import { toggleGptSeachView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/appConfigSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const isGptPage = useSelector((store) => store.gpt.showGptSearch);
  const currentLanguage = useSelector((store) => store.appConfig.lang);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSeachView());
  };

  const handleLanguageChange = (e) => {
    // console.log("e>", e.target.value);
    dispatch(changeLanguage(e.target.value));
  };

  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Unsubcribe when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen p-8 y-2 bg-gradient-to-b from-black z-10 flex justify-between flex-wrap">
      <img
        className="w-44 mx-auto  md:mx-0"
        src={netflixLogo}
        alt="netflix Logo"
      />
      {user && (
        <div className="flex justify-between items-center gap-5">
          {isGptPage && (
            <select
              name=""
              id=""
              className="bg-black text-white"
              onChange={handleLanguageChange}
              value={currentLanguage}
            >
              {LANGUAGES.map((language) => (
                <option key={language.id} value={language.identifier}>
                  {language.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="px-10 py-1 bg-gray-400 text texx-white cursor-pointer rounded-sm"
            onClick={handleGptSearchClick}
          >
            {isGptPage ? "Homepage" : "GPT search"}
          </button>
          <img className="w-10 h-10 hidden md:block" src={user.photoURL} alt="" />
          <button
            className="font-bold text-white cursor-pointer"
            onClick={handleSignout}
          >
            Signout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
