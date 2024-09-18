const gridContainer = document.querySelector("#grid-container");
const sizeBtn = document.querySelector("#size-button");
const clearBtn = document.querySelector("#clear-button");

const grid = document.createElement("div");
grid.setAttribute("class", "grid");

let number;

sizeBtn.addEventListener("click", function (number) {
  const gridClone = document.querySelectorAll(".grid");
  gridClone.forEach((element) => {
    element.remove();
  });
  number = prompt("Set your size. Number must be between 1-100.");
  grid.style.width = 100 / number + "%";
  grid.style.height = 100 / number + "%";
  for (let i = 1; i <= number * number; i++) {
    gridContainer.append(grid.cloneNode());
  }
});

clearBtn.addEventListener("click", () => {
  const gridClone = document.querySelectorAll(".grid");
  gridClone.forEach((element) => {
    element.style.backgroundColor = "white";
  });
});

gridContainer.addEventListener("mouseover", function (e) {
  if (e.target.matches(".grid")) {
    e.target.style.backgroundColor = "black";
  }
});
