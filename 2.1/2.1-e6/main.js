// EJERCICIO 6

// Tenemos que crear una página HTML con un solo div, y usando JavaScript, añadir un h1 con el texto "Lorem ipsum", una imagen con el src http://via.placeholder.com/350x150 y un párrafo con el texto "Lorem ipsum dolor sit amet, consectetur adipisicing elit".

"use strict";

document.querySelector("div").innerHTML =
  '<h1>Lorem ipsum</h1><img src="http://via.placeholder.com/350x150" alt="imagen de prueba"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>';
