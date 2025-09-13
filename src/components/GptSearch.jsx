import { netflixBg } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10 pt-[0%] w-full">
        <img
          className="h-screen object-cover md:w-full "
          src={netflixBg}
          alt="Background netflix"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
