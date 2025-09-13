import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstant";
import client from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovies } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const currentLanguage = useSelector((store) => store.appConfig.lang);
  const searchText = useRef(null);

  const getMovieInfoByName = async (movieName) => {
    // const movieName = searchText.current.value.trim();
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS
      );
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.log("Error>>", error);
    }
  };

  const handleGptSearchClick = async () => {
    try {
      const query = searchText.current.value.trim();

      if (!query) {
        console.warn("Search query is empty.");
        return;
      }

      // console.log("Query >>", query);

      const response = await client.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              "You are a movie recommendation system.only give me 5 movies name by comma separated like inception,intersteller",
          },
          { role: "user", content: query },
        ],
      });
      // console.log(response.choices[0].message.content);
      const gptResult = response.choices[0].message.content.split(",");

      const promiseArray = gptResult.map((movie) => getMovieInfoByName(movie));

      const tmdbResults = await Promise.all(promiseArray);
      // console.log("tmdb Results>>", tmdbResults);
      dispatch(
        addGptMovies({ movieNames: gptResult, movieResults: tmdbResults })
      );
    } catch (error) {
      console.error("Error fetching movie recommendations:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <form
        className="bg-black md:p-20 rounded-2xl"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className=" mr-2 py-2 px-12 border border-white rounded-2xl placeholder:text-white text-white"
          type="text"
          name="gptsearch"
          id="gptsearch"
          ref={searchText}
          placeholder={lang[currentLanguage].gptSearchPlaceholder}
        />
        <button
          className=" bg-red-500 px-10 py-2 text-white rounded-lg cursor-pointer"
          onClick={handleGptSearchClick}
        >
          {lang[currentLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
