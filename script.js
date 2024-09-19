const gridContainer = document.querySelector("#grid-container");
const sizeBtn = document.querySelector("#size-button");
const clearBtn = document.querySelector("#clear-button");
const informationDiv = document.querySelector("#information");

const grid = document.createElement("div");
grid.setAttribute("class", "grid");

let number = 16;

function generateGrid(number) {
  grid.style.width = 100 / number + "%";
  grid.style.height = 100 / number + "%";
  for (let i = 1; i <= number * number; i++) {
    gridContainer.append(grid.cloneNode());
  }
  informationDiv.textContent = `Current grid is ${number}x${number}.`;
}

generateGrid(number);

function clearGrid() {
  const gridClone = document.querySelectorAll(".grid");
  gridClone.forEach((element) => {
    element.style.backgroundColor = "white";
  })
}

sizeBtn.addEventListener("click", function () {
  number = parseInt(prompt("Set your size. Number must be between 1-100."));
  if (number > 100 || number <= 0) {
    alert("Invalid number. Number must be between 1-100.");
    return;
  }
  const gridClone = document.querySelectorAll(".grid");
  gridClone.forEach((element) => {
    element.remove();
  });
  generateGrid(number);
});

clearBtn.addEventListener("click", clearGrid);

gridContainer.addEventListener("mouseover", (e) => {
  if (e.target.matches(".grid")) {
    e.target.style.backgroundColor = "black";
  }
});

// Add rainbow effect
// Add darkening effect
