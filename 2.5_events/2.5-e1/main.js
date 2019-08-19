// Hola click
// Crear una página HTML con un párrafo en el que ponga Hola y un botón. Cuando se pulse el botón hay que cambiar ese texto por "Mi primer click, ¡ole yo y la mujer que me parió!
"use strict";

const button = document.querySelector(".js-button");

function changeMessageOnClick() {
  const message = document.querySelector(".js-message");
  message.innerHTML = "Mi primer click, ¡ole yo y la mujer que me parió!";
}

button.addEventListener("click", changeMessageOnClick);
