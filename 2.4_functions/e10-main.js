// EJERCICIO 10
// Calculador de modelo de caja
// Como hemos visto en las clases anteriores, en CSS tenemos dos tipos de cálculo para las dimensiones de un elemento: border-box y content-box. Vamos a realizar un calculador al que le pasaremos 4 parámetros y nos devolverá el ancho del contenido, y el ancho total de la caja en una cadena como esta: El ancho del contenido es: 30px y el ancho total de la caja es: 34px.
// La función tendrá 4 parámetros:
// el primero será un booleano para especificar si es border-box o no.
// el segundo será un número con el width de la caja.
// el tercero será un número con el padding.
// el cuarto será un número con el border-size.
// Para probar que funciona, ejecuta la función recogiendo el resultado en una variable e imprímela en la consola.
let borderbox = 1;
let width = 100;
let padding = 10.1;
let border = 3;

const boxModelCalculator = () =>
  //   isBorderBox,
  //   widthNumber,
  //   paddingNumber,
  //   borderSizeNumber
  {
    (function isBorderBox(borderbox) {
      if (borderbox > 0) {
        return false;
      } else {
        return true;
      }
    })();
    (function widthNumber(width) {
      return parseInt(width);
    })();
    (function paddingNumber(padding) {
      return parseInt(padding);
    })();
    (function borderSizeNumber(border) {
      return parseInt(border);
    })();
  };

boxModelCalculator(isBorderBox, widthNumber, paddingNumber, borderSizeNumber);

// ERROR!!!
// Uncaught ReferenceError: isBorderBox is not defined
//     at <anonymous>:30:20
// (anonymous) @ VM98:30
