"use strict";

import Pagination from "./paginationview.js";

const pagination = new Pagination({
  total: 20,
  visible: 5,
  current: 1,
  container: document.body,
  callback: (ret) => {
    console.log(ret);
  },
});

document.querySelector("button").addEventListener("click", () => {
  pagination.newPage(3);
});
