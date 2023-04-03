const increaseBtn = document.getElementById("increase");
const resetBtn = document.getElementById("reset");
const decreaseBtn = document.getElementById("decrease");
const number = document.querySelector(".number");

let count = 0;
increaseBtn.addEventListener("click", (e) => {
  e.preventDefault();
  count += 1;
  number.textContent = count;
  if (count > 0) {
    number.style.color = "#2ed47b";
  } else if (count === 0) {
    number.style.color = "#000000";
  } else {
    number.style.color = "#ea2d2d";
  }
});

resetBtn.addEventListener("click", (e) => {
  e.preventDefault();
  count = 0;
  number.textContent = count;
  number.style.color = "#000000";
});

decreaseBtn.addEventListener("click", (e) => {
  e.preventDefault();
  count -= 1;
  number.textContent = count;
  if (count < 0) {
    number.style.color = "#ea2d2d";
  } else if (count === 0) {
    number.style.color = "#000000";
  } else {
    number.style.color = "#2ed47b";
  }
});
