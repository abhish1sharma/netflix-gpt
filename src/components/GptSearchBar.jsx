import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstant";

const GptSearchBar = () => {
  const currentLanguage = useSelector((store) => store.appConfig.lang);
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <form className="bg-black p-20 rounded-2xl">
        <input
          className=" mr-2 py-2 px-12 border border-white rounded-2xl placeholder:text-white text-white"
          type="text"
          name=""
          id=""
          placeholder={lang[currentLanguage].gptSearchPlaceholder}
        />
        <button className=" bg-red-500 px-10 py-2 text-white rounded-lg cursor-pointer">
          {lang[currentLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
