// import myMovies from "./movies.js";
import { htmlElements } from "./htmlElements.js";

export default (function () {
  htmlElements.sidebar__button.addEventListener("click", () => {
    htmlElements.header.style.backgroundColor = "rgb(27, 28, 36)";
    htmlElements.header__sidebar.style.width = "100vw";
    htmlElements.body.style.overflowY = "hidden";
    htmlElements.sidebar__buttonClose.style.display = "inline-block";
    htmlElements.sidebar__button.style.display = "none";
  });

  htmlElements.sidebar__buttonClose.addEventListener("click", () => {
    htmlElements.header.style.backgroundColor = "transparent";
    htmlElements.header__sidebar.style.width = "0%";
    htmlElements.body.style.overflowY = "scroll";
    htmlElements.sidebar__button.style.display = "inline-block";
    htmlElements.sidebar__buttonClose.style.display = "none";
  });
});
