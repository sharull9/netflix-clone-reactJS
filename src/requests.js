const API_KEY = "3a5d7704d7584e5c917404810e7aa0d6";

const requests = {
    fetchTrending : `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals : `/discover/tv?api_key=${API_KEY}&language=en-US&with_networks=213`,
    fetchTopRated : `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
    fetchRomanticMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
}


// /genre/tv/list language=en-US /genre/movie/list

export default requests;