// Conversor de edad de perro a humano
// Las reglas son las siguientes:
// El primer año de un perro equivale a 15 años de humano
// El segundo año de un perro equivale a nueve años de humano
// A partir del tercero, cada año de perro equivale a 5 años de humano.

const firstYear = 15;
const secondYear = 9;
const plusThird = 5;

let dogAge = document.querySelector(".js-dogAge");
let humanAge = document.querySelector(".js-humanAge");

dogAge.addEventListener("change", function() {
  if (dogAge.value === "") {
    humanAge.innerHTML = ``;
  } else if (dogAge.value < 1) {
    humanAge.innerHTML = `Tu perro tiene menos de ${firstYear} años humanos`;
  } else if (dogAge.value < 2) {
    humanAge.innerHTML = `Tu perro tiene ${firstYear} años humanos`;
  } else if (dogAge.value === 2) {
    humanAge.innerHTML = `Tu perro tiene ${firstYear +
      secondYear} años humanos`;
  } else {
    humanAge.innerHTML = `Tu perro tiene ${firstYear +
      secondYear +
      plusThird * (dogAge.value - 2)} años humanos`;
  }
});
