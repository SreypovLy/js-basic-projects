const number = document.querySelector(".number");
const buttons = document.querySelectorAll(".btn");

let count = 0;

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const style = e.currentTarget.classList;
    if (style.contains("increase")) {
      count++;
    } else if (style.contains("decrease")) {
      count--;
    } else {
      count = 0;
    }

    if (count > 0) {
      number.style.color = "#2ed47b";
    } else if (count < 0) {
      number.style.color = "#ea2d2d";
    } else {
      number.style.color = "#000000";
    }
    number.textContent = count;
  });
});
