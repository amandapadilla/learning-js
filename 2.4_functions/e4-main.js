// Pares o nones
// Crear una función que reciba por parámetro un número y devuelva true si es par y false si es impar.
// Ejecutala e imprime el resultado para comprobar que funciona.
let number = 5;

const isOddNumber = number => {
  if (number % 2 === 0) {
    return false;
  } else {
    return true;
  }
};
console.log(isOddNumber(number));
