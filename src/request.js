const API_KEY = "0381321b8d32c7ccdf4a16dd416cea17";
const requests = {
  fecthTrending: `/trending/all/week?api_key=${API_KEY}&language=en-LA`,
  fecthNetflixOriginals: `/discover/tv?api_key=${API_KEY}&width_networks=213`,
  fecthTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-LA`,
  fecthActionMovies: `/discover/movie?api_key=${API_KEY}&width_genres=28`,
  fecthComedyMovies: `/discover/movie?api_key=${API_KEY}&width_genres=1`,
  fecthHorrorMovies: `/discover/movie?api_key=${API_KEY}&width_genres=27`,
  fecthRomanceMovies: `/discover/movie?api_key=${API_KEY}&width_genres=10749`,
  fecthDocumentaries: `/discover/movie?api_key=${API_KEY}&width_genres=99`,
};
export default requests;
