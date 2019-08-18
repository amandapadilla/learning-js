// Cuántas letras tiene tu nombre
// Con todo lo aprendido hasta ahora vamos a hacer un programa que pinte en HTML lo siguiente: El nombre de mi compañera es Leticia Fernández Sánchez, y está compuesto por 23 caracteres, remplazando Leticia Fernández Sánchez por el nombre de nuestra compañera y 23 por la longitud de la cadena con su nombre.

const name = "Amanda Elena Padilla Santiago";
const display = document.querySelector("p");
const lengthOfName = name.length;

// display.innerHTML =
//   "El nombre de mi compañera es " +
//   name +
//   " y está compuesto por " +
//   lengthOfName +
//   " caracteres.";

// O bien puedes escribirlo así:

display.innerHTML = `El nombre de mi compañera es ${name} y está compuesto por ${lengthOfName} caracteres`;
