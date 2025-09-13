import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailer } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movie.trailerVideo);

  // Fetch movie video
  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    const jsonData = await data.json();
    // console.log("Json data>", jsonData.results);

    const filterData = jsonData.results.filter(
      (video) => video.type == "Trailer" && video.name == "Official Trailer"
    );
    const trailer = filterData.length ? filterData[0] : jsonData.results[0];
    // console.log("data>", trailer);
    // const { key } = trailer;
    dispatch(addTrailer(trailer));
    // setTrailerId(key);
  };
  useEffect(() => {
    !trailerVideo && getMovieVideo();
  }, []);
};

export default useMovieTrailer;
