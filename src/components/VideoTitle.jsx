import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-30">
      <h1 className="text-6xl">{title}</h1>
      <p className=" text-lg py-6 w-1/2">{overview}</p>
      <div>
        <button className="px-6 py-2 bg-white rounded-xl mx-2 text-2xl text-black">
         ▶️ Play
        </button>
        <button className="px-6 py-2 bg-gray-500 rounded-xl mx-2 text-2xl text-white">
         ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
