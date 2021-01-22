let htmlElements = {
  header: document.getElementById("header"),
  mainSection: document.getElementById("main"),
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
    htmlElements.header.style.backgroundColor = "rgb(27, 28, 36)";
  } else {
    htmlElements.header.style.backgroundColor = "transparent";
  }
});

function changedBackground() {
  let i = 0;
  setInterval(() => {
    if (i < 9) {
      htmlElements.mainSection.style.backgroundImage =
        "linear-gradient(to bottom, rgba(27, 28, 36, 1) 0%, rgba(27, 28, 36, .8) 15%, rgba(27,28,36, .3), rgba(27, 28, 36, .7) 85%,rgba(27, 28, 36, 8) 100%), url(../../images/main__img/img" +
        i +
        ".jpg)";
      i++;
      console.log(`I es igual a ${i}`);
    } else {
      htmlElements.mainSection.style.backgroundImage =
        "linear-gradient(to bottom, rgba(27, 28, 36, 1) 0%, rgba(27, 28, 36, .8) 15%, rgba(27,28,36, .3), rgba(27, 28, 36, .7) 85%,rgba(27, 28, 36, 8) 100%), url(../../images/main__img/img" +
        i +
        ".jpg)";
      i = 0;
      console.log(`I es igual a ${i}`);
    }
  }, 6000);
}

changedBackground();
