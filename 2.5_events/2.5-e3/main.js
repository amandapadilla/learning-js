// Dame ipsum
// Crear una página HTML con un párrafo con lorem ipsum. Al poner el ratón sobre el párrafo, vamos a añadir un nuevo párrafo a la página con lorem ipsum.
"use strict";

const initialText = document.querySelector(".js-text");

function addNewParagraphMouseOn() {
  const newText = document.createElement("P");
  newText.innerHTML =
    "Aperiam neque necessitatibus deserunt doloremque iure voluptate reprehenderit ratione veniam.";
  document.body.appendChild(newText);
}

initialText.addEventListener("mouseover", addNewParagraphMouseOn);
