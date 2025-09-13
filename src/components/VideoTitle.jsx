import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] md:px-30 px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="md:text-6xl text-lg">{title}</h1>
      <p className=" md:text-lg hidden md:block py-6 md:w-1/2 ">{overview}</p>
      <div className="mt-2 md:mt-0 flex">
        <button className="md:px-10 px-6 py-2 bg-white rounded-lg mx-2 md:text-md text-sm text-black hover:opacity-80 cursor-pointer">
          ▶ Play
        </button>
        <button className="md:px-10 hidden md:block px-6 py-2 bg-gray-500 rounded-lg mx-2 md:text-md text-sm text-white cursor-pointer">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
