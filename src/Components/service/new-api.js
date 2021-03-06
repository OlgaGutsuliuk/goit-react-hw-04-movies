import axios from 'axios';

const KEY = '2b95764529980b844a5836f9226325d6';

export function featchMovies() {
  const URL = `https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`;
  return axios.get(URL).then(result => {
    return result.data;
  });
}

export function featchDetailsPage(id) {
  const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US`;
  return axios.get(URL).then(result => {
    return result.data;
  });
}

export function fetchCast(id) {
  const URL = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}&language=en-US`;
  return axios.get(URL).then(result => {
    return result.data;
  });
}

export function fetchReviews(id) {
  const URL = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`;
  return axios.get(URL).then(result => {
    return result.data;
  });
}

export function fetchSearch(query) {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`;
  return axios.get(url).then(res => {
    return res.data;
  });
}