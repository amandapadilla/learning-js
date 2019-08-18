"use strict";

document.querySelector("p").innerHTML = "Hola mundo";

///////////////////

const selectionMessage = document.querySelector("ul");

selectionMessage.innerHTML =
  "La adalaber seleccionada es: " +
  document.querySelector(".js-lily").innerHTML;
