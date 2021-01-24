import { htmlElements } from "./htmlElements.js";

export default (function () {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      htmlElements.header.style.backgroundColor = "rgba(27, 28, 36)";
    } else {
      htmlElements.header.style.backgroundColor = "transparent";
    }
  });
});
