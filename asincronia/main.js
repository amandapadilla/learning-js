"user strict";

let counter = 0;
let temp;

const incrementAndShowCounter = () => {
  counter++;
  const time = document.querySelector(".time");
  time.innerHTML = counter;
  if (counter === 10) {
    clearTimeout(temp);
  }
};

temp = setTimeout(incrementAndShowCounter, 1000);
