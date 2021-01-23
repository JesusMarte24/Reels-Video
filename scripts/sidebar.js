import myMovies from "./movies.js";

let htmlElements = {
  header: document.getElementById("header"),
  mainSection: document.getElementById("main"),
  mainBackground: document.getElementById("main__background"),
  mainTittle: document.getElementById("main__tittle"),
  mainParagraph: document.getElementById("main__paragraph"),
  body: document.getElementById("body"),
  header__sidebar: document.getElementById("header__sidebar"),
  sidebar__button: document.getElementById("sidebar__button"),
  sidebar__buttonClose: document.getElementById("sidebar__button--close"),
};

htmlElements.sidebar__button.addEventListener("click", () => {
  htmlElements.header.style.backgroundColor = "rgb(27, 28, 36)";
  htmlElements.header__sidebar.style.width = "100vw";
  htmlElements.body.style.marginLeft = "100%";
  htmlElements.body.classList.add("body--lock");
  htmlElements.sidebar__buttonClose.style.display = "inline-block";
  htmlElements.sidebar__button.style.display = "none";
});

htmlElements.sidebar__buttonClose.addEventListener("click", () => {
  htmlElements.header.style.backgroundColor = "transparent";
  htmlElements.header__sidebar.style.width = "0%";
  htmlElements.body.style.marginLeft = "0%";
  htmlElements.body.classList.remove("body--lock");
  htmlElements.sidebar__button.style.display = "inline-block";
  htmlElements.sidebar__buttonClose.style.display = "none";
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    htmlElements.header.style.backgroundColor = "rgba(27, 28, 36)";
  } else {
    htmlElements.header.style.backgroundColor = "transparent";
  }
});

function newMovie() {
  let i = 1;

  setInterval(() => {
    if (i < myMovies.length - 1) {
      htmlElements.mainBackground.src = `./images/main__img/img${i}.jpg`;
      htmlElements.mainTittle.innerHTML = myMovies[i].name;
      htmlElements.mainParagraph.innerHTML = myMovies[i].description;
      i++;
      console.log(i);
    } else {
      htmlElements.mainBackground.src = `./images/main__img/img${i}.jpg`;
      htmlElements.mainTittle.innerHTML = myMovies[i].name;
      htmlElements.mainParagraph.innerHTML = myMovies[i].description;
      i = 0;
      console.log(i);
    }
  }, 8000);
}

// newMovie();
