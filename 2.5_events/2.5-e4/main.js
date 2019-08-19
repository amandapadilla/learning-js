// Scroll es de colores
// Cambiar el color de fondo de la página cuando se haga scroll. Para ello tenemos que:
// Añadir un div con suficiente texto dentro para que haya scroll. Podéis usar el siguiente comando de emmet para hacerlo p*50>lorem.
// Preparar classes para cambiar el color de fondo del div.
// Escuchar el evento scroll sobre la ventana window.
// Cuando la posición del scroll vertical supere 250 píxeles poner un color de fondo, cuando sea inferior a 250 píxeles poner otro.
"use strict";

const background = document.querySelector(".js-div");

function changeColorWhenScroll() {
  if (window.scrollY > 250) {
    background.classList.add("firstColor");
  } else if (window.scrollY > 500) {
    background.classList.remove("firstColor");
    background.classList.add("secondColor");
  } else if (window.scrollY > 750) {
    background.classList.remove("secondColor");
    background.classList.add("thirdColor");
  }
}
window.addEventListener("scroll", changeColorWhenScroll);

////CORREGIR EJERCICIO
