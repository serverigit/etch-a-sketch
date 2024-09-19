const gridContainer = document.querySelector("#grid-container");
const sizeBtn = document.querySelector("#size-button");
const clearBtn = document.querySelector("#clear-button");
const informationDiv = document.querySelector("#information");
const blackBtn = document.querySelector("#black-button");
const eraserBtn = document.querySelector("#eraser-button");
const rainbowBtn = document.querySelector("#rainbow-button");
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
  if (number > 100 || number <= 0 || isNaN(number)) {
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

let black = true;
let eraser = false;
let rainbow = false;

blackBtn.addEventListener("click", () => {
  black = true;
  eraser = false;
  rainbow = false;
});

eraserBtn.addEventListener("click", () => {
  eraser = true;
  black = false;
  rainbow = false;
})

rainbowBtn.addEventListener("click", () => {
  rainbow = true;
  eraser = false;
  black = false;
})

gridContainer.addEventListener("mouseover", (e) => {
  if (e.target.matches(".grid")) {
    if (black) {
      e.target.style.backgroundColor = "black";
    }
    if (eraser) {
      e.target.style.backgroundColor = "white";
    }
    if (rainbow) {
      e.target.style.backgroundColor = "black";
    }
  }
});

// Add rainbow effect
  // red, orange, yellow, green, blue, indigo, and violet

function getRandomColor() {
  const rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
  let randomNumber = Math.floor(Math.random() * rainbowColors.length);
  let randomColor = rainbowColors[randomNumber];
  console.log(randomColor);
  return randomColor;
}

// Add darkening effect
