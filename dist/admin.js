/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

/*
 * Blockons Admin JS
 */
document.addEventListener("DOMContentLoaded", function () {
  var blockonsRemFsLinks = document.querySelectorAll(".fs-submenu-item.blockons");
  if (blockonsRemFsLinks) {
    blockonsRemFsLinks.forEach(function (item) {
      item.closest("li").remove();
    });
  }
});
/******/ })()
;