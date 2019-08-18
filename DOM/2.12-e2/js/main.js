"use strict";

const madrid = [
  "https://t-ec.bstatic.com/images/hotel/max1024x768/168/168013151.jpg",
  "http://www.recordrentacar.com/blog/wp-content/uploads/2016/01/Terraza-Circulo-de-Bellas-Artes1.jpg",
  "https://saposyprincesas.elmundo.es/wp-content/uploads/2017/03/Madrid-Cibeles-700x450.jpg"
];

const paris = [
  "https://cdn.civitatis.com/francia/paris/guia/paris-museum-pass.jpg",
  "https://cdn2.traveler.es/uploads/images/thumbs/es/trav/3/s/2016/22/itienes_dos_dias_libres_escapate_a_paris_6314_940x627.jpg",
  "http://amicsliceu.com/wp-content/uploads/2018/12/paris_noche_museos_01-1.jpg"
];
const selectCity = document.querySelector("#city");
let picture;
let srcContent;

const changePictures = function(ev) {
  const selectedCity = ev.target.id;
  picture.setAttribute("src", selectedCity);
};

const cityPictures = () => {
  for (let i = 0; i < 3; i++) {
    picture = document.createElement("img");
    picture.setAttribute("src", "");
    const pictures = document.querySelector("body");
    pictures.appendChild(picture);
  }
};
cityPictures();
selectCity.addEventListener("click", changePictures);
// const paris = []
