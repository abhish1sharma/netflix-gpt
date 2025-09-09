import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector((store) => store.movie.nowPlayingMovies);
  const popularMovies = useSelector((store) => store.movie.popularMovies);
  const topRatedMovies = useSelector((store) => store.movie.topRatedMovies);
  const upcomingMovies = useSelector((store) => store.movie.upcomingMovies);
  return (
    <div className=" bg-black">
      <div className="-mt-40 relative z-20 pl-30">
        <MovieList title="Now Playing" movies={nowPlayingMovies} />
        <MovieList title="Upcomming" movies={upcomingMovies} />
        <MovieList title="Popular" movies={popularMovies} />
        <MovieList title="Top Rated" movies={topRatedMovies} />
        {/* <MovieList title="" movies={movies} /> */}
      </div>
    </div>
  );
};

export default SecondaryContainer;
