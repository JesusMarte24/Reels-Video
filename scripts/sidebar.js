let htmlElements = {
  header__sidebar: document.getElementById("header__sidebar"),
  sidebar__button: document.getElementById("sidebar__button"),
};

htmlElements.sidebar__button.addEventListener("click", () => {
  htmlElements.header__sidebar.classList.toggle("header__container--2");

  if (htmlElements.sidebar__button.classList.contains("sidebar__button")) {
    htmlElements.sidebar__button.classList.add("sidebar__button--close");
    htmlElements.sidebar__button.classList.remove("sidebar__button");
  } else {
    htmlElements.sidebar__button.classList.remove("sidebar__button--close");
    htmlElements.sidebar__button.classList.add("sidebar__button");
  }
});
