const view = document.querySelector(".js");
const arr = [];
function get100Numbers() {
  for (let i = 1; i < 101; i++) {
    arr.push(i);
  }
}
get100Numbers();
console.log(arr);

// const get100Numbers = getReverse100Numbers;
function getReverse100Numbers() {
  arr.reverse(get100Numbers);
}
getReverse100Numbers();
console.log(arr);
