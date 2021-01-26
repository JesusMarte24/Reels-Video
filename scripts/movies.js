import { htmlElements } from "./htmlElements.js";
const API = "https://api.themoviedb.org/3/";
const MOVIE = "movie/";
const API_KEY = "?api_key=d76561e4c0e9fec1074cfe9328993d15";
const API_EN = "&language=en";
const API_ES = "&language=es";
const API_IMG = "https://image.tmdb.org/t/p/";
const API_IMG_SIZE = {
  w92: "w92",
  w154: "w154",
  w185: "w185",
  w342: "w342",
  w500: "w500",
  w780: "w780",
  original: "original",
};

async function Popular() {
  return await fetch(`${API}${MOVIE}popular${API_KEY}${API_EN}`)
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < htmlElements.slides__title.length; i++) {
        htmlElements.swiper__background[
          i
        ].src = `${API_IMG}${API_IMG_SIZE.w500}/${data.results[i].poster_path}`;
        htmlElements.slides__title[i].innerHTML =
          data.results[i].title + ` <span id="content--type">Movie</span>`;
        htmlElements.slides__rating[i].innerHTML =
          data.results[i].vote_average + "/10";
        htmlElements.slides__release[i].innerHTML =
          data.results[i].release_date;
        htmlElements.slides__overview[i].innerHTML = data.results[i].overview;
      }
    });
}

export { Popular };
