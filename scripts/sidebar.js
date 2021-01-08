let htmlElements = {
  header: document.getElementById("header"),
  body: document.getElementById("body"),
  header__sidebar: document.getElementById("header__sidebar"),
  sidebar__button: document.getElementById("sidebar__button"),
  sidebar__buttonClose: document.getElementById("sidebar__button--close"),
};

htmlElements.sidebar__button.addEventListener("click", () => {
  htmlElements.header.style.backgroundColor = "rgb(27, 28, 36)";
  htmlElements.header__sidebar.style.width = "100vw";
  htmlElements.body.style.marginLeft = "100%";
  htmlElements.sidebar__buttonClose.style.display = "inline-block";
  htmlElements.sidebar__button.style.display = "none";
});

htmlElements.sidebar__buttonClose.addEventListener("click", () => {
  htmlElements.header.style.backgroundColor = "transparent";
  htmlElements.header__sidebar.style.width = "0%";
  htmlElements.body.style.marginLeft = "0%";
  htmlElements.sidebar__button.style.display = "inline-block";
  htmlElements.sidebar__buttonClose.style.display = "none";
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    htmlElements.header.style.backgroundColor = "rgb(27, 28, 36)";
  } else {
    htmlElements.header.style.backgroundColor = "transparent";
  }
});
