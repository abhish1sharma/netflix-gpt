import React from "react";

const GptSearchBar = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <form className="bg-black p-20 rounded-2xl">
        <input
          className="w-6/12 mr-2 py-2 px-12 border border-white rounded-2xl placeholder:text-white"
          type="text"
          name=""
          id=""
          placeholder="What would you like to watch today?"
        />
        <button className="w-5/12 bg-red-500 px-10 py-2 text-white rounded-lg cursor-pointer">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
