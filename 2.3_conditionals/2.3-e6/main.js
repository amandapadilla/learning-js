//Condicional ternario
"use strict";

let avocados;
const avocadoPrice = 1.5;
const money = 33;

money >= avocadoPrice ? (avocados = money / avocadoPrice) : (avocados = 0);

if (money >= avocadoPrice) {
  avocados = money / avocadoPrice;
} else {
  avocados = 0;
}
