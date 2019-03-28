let count = 0;
const element = document.getElementById("counter");

function increase() {
  count++;
  element.innerText = count;
}

function decrease() {
  count--;
  element.innerText = count;
}

function reset() {
  count = 0;
  element.innerHTML = "<mark>" + count + "</mark>";
}