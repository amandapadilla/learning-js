// Jugando con el teclado
// Tenemos que crear una página vacía. Al pulsar la tecla 'r' su color de fondo cambia a rojo y al pulsar la 'm' a morado. Vamos a escuchar un evento de teclado directamente sobre el elemento document
//https://keycode.info/
"use strict";
const body = document.querySelector("body");

function changeColorByKey() {
  if (event.code == "KeyR") {
    body.classList.add("red");
    body.classList.remove("purple");
  } else if (event.code == "KeyM") {
    body.classList.add("purple");
  }
}

document.addEventListener("keydown", changeColorByKey);
