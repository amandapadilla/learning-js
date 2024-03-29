// Notificaciones arcoiris

// Crea un div que contenga un título "NOTIFICACIÓN" y un texto "Mensaje por defecto". Crea también tres clases:
// La primera, .success, aplicará un borde verde oscuro, un fondo verde claro y el color de fuente verde oscuro
// La segunda, .error, igual pero sustituyendo el verde por rojo
// La tercera, .warning, lo mismo pero usando el color amarillo
// Usando JavaScript, haremos que:
// Si contiene la clase warning, el título sea 'AVISO' y el texto sea: 'Tenga cuidado'
// Si contiene la clase error, el título sea 'ERROR' y el texto sea: 'Ha surgido un error'
// Si contiene la clase success, el título sea 'CORRECTO' y el texto sea: 'Los datos son correctos.
// Cambia la clase en HTML y comprueba que el código de JavaScript funciona.
"use strict";

const notification = document.querySelector("div");
const title = document.querySelector("h1");
const message = document.querySelector("p");

if (notification.classList.contains(".sucess")) {
  title.innerHTML = "CORRECTO";
  message.innerHTML = "Los datos son correctos";
} else if (notification.classList.contains(".warning")) {
  title.innerHTML = "AVISO";
  message.innerHTML = "Tenga cuidado";
} else if (notification.classList.contains(".error")) {
  title.innerHTML = "ERROR";
  message.innerHTML = "Ha surgido un error";
}
