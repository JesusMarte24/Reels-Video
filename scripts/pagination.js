import { htmlElements } from "./htmlElements.js";
const API = "https://api.themoviedb.org/3/movie/top_rated";
const API_KEY = "?api_key=d76561e4c0e9fec1074cfe9328993d15";
const API_EN = "&language=en";
const PAGE = "&page=";
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

function Pagination() {
  initPagination();

  htmlElements.pagination__1.addEventListener("click", async () => {
    if (Number(htmlElements.pagination__2.innerHTML) > 1) {
      htmlElements.pagination__2.innerHTML =
        Number(htmlElements.pagination__2.innerHTML) - 1;
    }

    await fetch(
      API +
        API_KEY +
        API_EN +
        PAGE +
        Number(htmlElements.pagination__2.innerHTML)
    )
      .then((response) => response.json())
      .then((data) => {
        for (let i = 0; i < htmlElements.movies__poster.length; i++) {
          htmlElements.movies__poster[
            i
          ].src = `${API_IMG}${API_IMG_SIZE.w342}/${data.results[i].poster_path}`;

          htmlElements.movies__title[i].innerHTML = data.results[i].title;
          htmlElements.movies__release[i].innerHTML = data.results[
            i
          ].release_date.slice(0, 4);
        }
      });
  });

  htmlElements.pagination__5.addEventListener("click", async () => {
    if (Number(htmlElements.pagination__5.innerHTML) < 99) {
      htmlElements.pagination__2.innerHTML =
        Number(htmlElements.pagination__2.innerHTML) + 1;
    }

    await fetch(
      API +
        API_KEY +
        API_EN +
        PAGE +
        Number(htmlElements.pagination__2.innerHTML)
    )
      .then((response) => response.json())
      .then((data) => {
        for (let i = 0; i < htmlElements.movies__poster.length; i++) {
          htmlElements.movies__poster[
            i
          ].src = `${API_IMG}${API_IMG_SIZE.w342}/${data.results[i].poster_path}`;

          htmlElements.movies__title[i].innerHTML = data.results[i].title;
          htmlElements.movies__release[i].innerHTML = data.results[
            i
          ].release_date.slice(0, 4);
        }
      });
  });
}

async function initPagination() {
  await fetch(API + API_KEY + API_EN + PAGE + "1")
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < htmlElements.movies__poster.length; i++) {
        htmlElements.movies__poster[
          i
        ].src = `${API_IMG}${API_IMG_SIZE.w342}/${data.results[i].poster_path}`;

        htmlElements.movies__title[i].innerHTML = data.results[i].title;
        htmlElements.movies__release[i].innerHTML = data.results[
          i
        ].release_date.slice(0, 4);
      }
    });
}

export { Pagination };
