// Información instantánea
// Crear una página con un input de texto y un párrafo vacío. Cada vez que la usuaria escriba una letra tenemos que recoger el valor del input al que le pusimos el listener y escribirlo en el párrafo.
"use strict";

const input = document.querySelector(".js-input");
const newText = document.querySelector(".js-newText");

const getTextFromInputToP = event => {
  newText.innerText = event.currentTarget.innerText;
};

input.addEventListener("keydown", getTextFromInputToP);

// CORREGIR EJERCICIO

// const input = document.querySelector("#input");
// const text = document.querySelector(".text");

// input.addEventListener("keydown", write);
// function write(event) {
//   text.innerText = event.currentTarget.innerText;
// }
