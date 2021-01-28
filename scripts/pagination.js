import { htmlElements } from "./htmlElements.js";

function Pagination() {
  htmlElements.pagination__1.addEventListener("click", () => {});
  htmlElements.pagination__2.addEventListener("click", () => {});
  htmlElements.pagination__3.addEventListener("click", () => {
    htmlElements.pagination__3.innerHTML = htmlElements.pagination__3.innerHTML;
  });
  htmlElements.pagination__4.addEventListener("click", () => {});
  htmlElements.pagination__5.addEventListener("click", () => {});
}

export { Pagination };
