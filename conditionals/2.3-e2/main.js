"use strict";

let name = "Tamara";
let welcome = document.querySelector(".welcome");

if (name === "Tamara" || name === "Amanda") {
  welcome.innerHTML = `Bienvenida, ${name}`;
} else {
  welcome.innerHTML =
    "Lo siento pero el usuario que has introducido no está registrado";
}
