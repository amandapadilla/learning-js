"use strict";

const updateFace = function(ev) {
  ev.preventDefault();
  //   const select = document.querySelector(".js-select");
  //   const faceValue = select.value;
  //   const face = document.querySelector (".js-face");
  //   face.innerHTML = faceValue;
  document.querySelector(".js-face").innerHTML = document.querySelector(
    ".js-face"
  );
};

const changeBackgroundColor = function() {};

const button = document.querySelector(".js-button");

button.addEventListener("click", updateFace);
