"use strict";

const selectors = document.querySelector(".js-selectors");
const lightTheme = document.querySelector(".js-light");
const darkTheme = document.querySelector(".js-dark");
const body = document.querySelector("body");

const selectLightTheme = function() {
  body.innerHTML.classList.add("theme1");
  body.innerHTML.classList.remove("theme2");
  debugger;
};
const selectDarkTheme = function() {
  body.innerHTML.classList.add("theme2");
  body.innerHTML.classList.remove("theme1");
  debugger;
};

lightTheme.addEventListener("click", selectLightTheme);
darkTheme.addEventListener("click", selectDarkTheme);
debugger;
