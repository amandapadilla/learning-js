"use strict";

const firstDogImage =
  "https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg";
const firstDogName = "Dina";
// const firstDogName = document.querySelector(".first-dog");

const secondDogImage =
  "https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg";
const secondDogName = "Luna";
// const secondDogName = document.querySelector(".second-dog");

const thirdDogImage =
  "https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg";
const thirdDogName = "Lana";
// const thirdDogName = document.querySelector(".third-dog");
const element = document.querySelector(".doggies");
element.innerHTML = `<li>${firstDogName}<img src=${firstDogImage}></li><li>${secondDogName} <img src=${secondDogImage}></li><li>${thirdDogName}<img src=${thirdDogImage}></li>`;
