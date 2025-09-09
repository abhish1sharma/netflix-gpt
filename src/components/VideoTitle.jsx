import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-30 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl">{title}</h1>
      <p className=" text-lg py-6 w-1/2">{overview}</p>
      <div>
        <button className="px-10 py-2 bg-white rounded-lg mx-2 text-xl text-black hover:opacity-80 cursor-pointer">
          ▶️ Play
        </button>
        <button className="px-10 py-2 bg-gray-500 rounded-lg mx-2 text-xl text-white cursor-pointer">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
