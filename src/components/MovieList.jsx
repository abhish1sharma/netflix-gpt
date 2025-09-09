import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
//   console.log("movies", movies);
  if (!movies) return;
  return (
    <div className=" ">
      <h1 className="text-3xl font-bold py-5 px-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll scroll-auto">
        <div></div>
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
