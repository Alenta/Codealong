console.log("Initialize jScript");
const introSection = document.getElementById("introSection");
console.dir(introSection);

//Counter Logic
//const counterElement = document.getElementById("counter");
const counterElement = document.querySelector("#counter");

const display = counterElement.querySelector("span");
console.log(display);
console.dir(counterElement);

const plusButton = counterElement.querySelector(".plus");
const minusButton = counterElement.querySelector(".minus");
const resetButton = counterElement.querySelector(".reset");

function handleIncrement() {
  const currentValue = Number(display.textContent);
  const newValue = currentValue + 1;
  display.textContent = newValue;
}
function handleDecrement() {
  const currentValue = Number(display.textContent);
  const newValue = currentValue - 1;

  display.textContent = newValue;
}

function reset() {
  display.textContent = 0;
}

plusButton.addEventListener("click", handleIncrement);
minusButton.addEventListener("click", handleDecrement);
resetButton.addEventListener("click", reset);
