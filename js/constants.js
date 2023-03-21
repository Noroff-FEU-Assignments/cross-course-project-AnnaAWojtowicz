const tmdbUrl = "https://api.themoviedb.org/3";
const apiKey = "aa09f23355458fac95c614bb20d2352f";
const getPopularUrl = `${tmdbUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

const getNowPlayingUrl = `${tmdbUrl}/movie/now_playing?api_key=${apiKey}&page=1`;
const getDramaUrl = `${tmdbUrl}/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&page=1&with_genres=18`;
const getDocUrl = `${tmdbUrl}/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&page=1&with_genres=99`;
const getJapaneseUrl = `${tmdbUrl}/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&page=1&with_original_language=ja`;

function getFilmDetailsUrl(id) {
    return `${tmdbUrl}/movie/${id}?api_key=${apiKey}&language=en-US`;
}

function getFilmCreditsUrl(id) {
    return `${tmdbUrl}/movie/${id}/credits?api_key=${apiKey}&language=en-US`;
}

const imageUrl = "https://image.tmdb.org/t/p/w500";