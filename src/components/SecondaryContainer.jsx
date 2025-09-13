import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector((store) => store.movie.nowPlayingMovies);
  const popularMovies = useSelector((store) => store.movie.popularMovies);
  const topRatedMovies = useSelector((store) => store.movie.topRatedMovies);
  const upcomingMovies = useSelector((store) => store.movie.upcomingMovies);
  return (
    <div className=" bg-black">
      <div className="md:-mt-40 mt-0 relative z-20 md:pl-30 pl-8">
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
