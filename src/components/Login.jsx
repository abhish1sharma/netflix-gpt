import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isLoginPage, setIsLoginPage] = useState(true);
  console.log("islogin>>", isLoginPage);

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

      <form className="w-1/4 bg-black opacity-75  absolute top-1/2 left-1/2 -translate-1/2 text-white p-16 flex justify-center items-start flex-col rounded-lg">
        <h1 className="font-bold text-2xl self-start ml-3 mb-5">
          {isLoginPage ? "Sign In" : "Sign Up"}
        </h1>
        {!isLoginPage && (
          <input
            type="text"
            placeholder="Name"
            className="p-2 my-2 border border-white rounded-sm w-full bg-black opacity-80"
            id="text"
          />
        )}

        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-2 border border-white rounded-sm w-full bg-black opacity-80"
          id="email"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2  my-2 border border-white rounded-sm w-full bg-black opacity-80"
          id="password"
        />
        <button className="px-18 py-2 my-2   text-white bg-red-500 rounded-sm w-full">
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
