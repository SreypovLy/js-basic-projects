const colors = ["pink", "green", "#9900cc", "rgb(128, 0, 0)"];
const button = document.getElementById("btn");
const color = document.querySelector(".color");

button.addEventListener("click", (e) => {
  e.preventDefault();
  let randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
