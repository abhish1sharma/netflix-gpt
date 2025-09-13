export const netflixLogo =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const netflixBg =
  "https://assets.nflxext.com/ffe/siteui/vlv3/8d617e19-3c3c-4c28-8998-c9b14dbc7200/web/IN-en-20250901-TRIFECTA-perspective_48d84d4e-9558-46b8-a0f3-8b2dc8478431_large.jpg";

export const githubAvatar =
  "https://avatars.githubusercontent.com/u/49032373?v=4";

export const avatar =
  "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + import.meta.env.VITE_REACT_TMDB_KEY,
  },
};

export const IMG_CDN = "https://image.tmdb.org/t/p/w500";

export const LANGUAGES = [
  { id: 1, identifier: "en", name: "English" },
  { id: 2, identifier: "hindi", name: "Hindi" },
  { id: 3, identifier: "esp", name: "Spanish" },
];

export const OPENAI_KEY = import.meta.env.VITE_REACT_OPENAI_KEY;
