let htmlElements = {
  header__sidebar: document.getElementById("header__sidebar"),
  sidebar__button: document.getElementById("sidebar__button"),
};

htmlElements.sidebar__button.addEventListener("click", () => {
  htmlElements.header__sidebar.classList.toggle("header__container--2");
  htmlElements.sidebar__button.classList.toggle("sidebar__button--close");
  htmlElements.sidebar__button.classList.toggle("sidebar__button");
});
