const gridContainer = document.querySelector("#grid-container");

const grid = document.createElement("div");
grid.setAttribute("class", "grid");

let number = 16;

grid.style.width = 100 / number + "%";
grid.style.height = 100 / number + "%";

for (let i = 1; i <= number * number; i++) {
  gridContainer.append(grid.cloneNode());
}

gridContainer.addEventListener("mouseover", function (e) {
  if (e.target.matches(".grid")) {
    e.target.style.backgroundColor = "black";
  }
});
