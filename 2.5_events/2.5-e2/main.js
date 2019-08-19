// ¿Cómo te llamas?
// Crear una página HTML con un input de tipo texto para introducir tu nombre y un botón. Al pinchar sobre el botón, imprimir en la consola el mensaje 'Hola {nombre}', con el nombre que aparece en el input de texto.
"use strict";

const inputName = document.querySelector(".js-inputName");
const button = document.querySelector(".js-button");
const textResult = document.querySelector(".js-textResult");

function addNameToTextOnClick() {
  textResult.innerHTML = `Hola, ${inputName.value}`;
}

button.addEventListener("click", addNameToTextOnClick);
