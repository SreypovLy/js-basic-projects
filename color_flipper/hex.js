const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const button = document.getElementById("btn");
const color = document.querySelector(".color");

button.addEventListener("click", (e) => {
  e.preventDefault();
  let hex = "#";

  for (let i = 0; i < 6; i++) {
    let randomNumber = getRandomNumber();
    hex += colors[randomNumber];
  }

  document.body.style.backgroundColor = hex;
  color.textContent = hex;
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
