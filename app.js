const inputRed = document.getElementById("red");
const inputGreen = document.getElementById("green");
const inputBlue = document.getElementById("blue");

const redText = document.getElementById("red-text");
const greenText = document.getElementById("green-text");
const blueText = document.getElementById("blue-text");

let red = inputRed.value;
let green = inputGreen.value;
let blue = inputBlue.value;

redText.textContent = red;
greenText.textContent = green;
blueText.textContent = blue;

function updateColor(red, green, blue) {
  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

inputRed.addEventListener("change", (e) => {
  red = inputRed.value;
  redText.textContent = red;
  updateColor(red, green, blue);
});

inputGreen.addEventListener("change", (e) => {
  green = inputGreen.value;
  greenText.textContent = green;
  updateColor(red, green, blue);
});

inputBlue.addEventListener("change", (e) => {
  blue = inputBlue.value;
  blueText.textContent = blue;
  updateColor(red, green, blue);
});
