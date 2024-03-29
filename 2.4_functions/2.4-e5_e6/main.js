//EJERCICIO 5
//querySelector para todas
// Estamos trabajando en un proyecto bastante grande, donde hay que recoger muchos elementos de HTML desde JavaScript para interaccionar con ellos. Para no tener que escribir document.querySelector(...) tantas veces una compañera ha sugerido hacer una función llamada getEl.
// Esta función debe recibir por parámetro un selector de css y retornará el elemento de HTML correspondiente. Hemos quedado en que cuando llamemos a la función la sintaxis será tal que así:
// const btnEl = getEl('.btn');
"use strict";

//CORREGIR EJERCICIO

// const elements = document.querySelectorAll("main");

// const addStyleToElements = elements => {
//   elements.classList.add("element"); // DUDA?? Llamando sólo a <main> se añade la clase a los hijos?
//   getEl = document.querySelector(".element");
//   getEl.innerHTML = "style=" + "color: purple;" + "background-color: #e5e5e5;";
// };
// addStyleToElements(elements);

//Respuesta de Bárbara
// function getEl(element) {
//     return document.querySelector(element);
//   }

//   getEl(".title").innerText = "Hi";

/////////////////////////////////////////////////////////
//EJERCICIO 6
// Logueando errores
// Nos hemos dado cuenta de que cuando llamamos a getEl a veces nos equivocamos escribiendo el selector (se nos olvida el punto de la clase, nos comemos una letra...), a partir de ahí todo falla y nos cuesta encontrar dónde está el error.
// Vamos a mejorar nuestra función para que nos avise cuando esto ocurre. Dentro de ella:
// Al recoger el elemento de HTML vamos a guardarlo en una constante.
// Con un condicional vamos a comprobar si la constante no tiene ningún valor, y en ese caso vamos a imprimir un error en la consola que diga No existe ningún elemento con clase, id o tag llamado {aquí-el-nombre-del-selector}
// Finalmente tras nuestro condicional retornaremos la constante con el elemento.
// Nota: podemos imprimir/loguear errores con console.error().

///////////////////////////////////////////////////////
// EJERCICIO 7
// Combinando funciones
// Partimos de un HTML con un párrafo que contiene un número. En nuestro fichero JavaScript nos copiamos la declaración de las funciones getEl y la que comprueba si un número es par o impar (ejercicio 4).
// Sin modificar estas dos funciones, vamos a hacer lo siguiente:
// usando nuestra función getEl accedemos al párrafo, y recogemos su valor (con innerHTML)
// convertimos ese valor a número y lo asignamos a una constante
// usamos nuestra función del ejercicio 4 para saber si es par o impar
// escribimos en la consola 'Este número es PAR: ...' o 'Este número es IMPAR: ...'

