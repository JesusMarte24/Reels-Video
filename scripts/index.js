import Scroll from "./scroll.js";
import Sidebar from "./sidebar.js";
import { Popular } from "./movies.js";
import { Pagination } from "./pagination.js";

window.addEventListener("load", init);

function init() {
  Sidebar();
  Scroll();
  Popular();
  Pagination();
}
