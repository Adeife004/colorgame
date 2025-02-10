let colors = generateRandomColors(6);

let squares = document.querySelectorAll(".square");

let messageDisplay = document.querySelector(".message");

let colorDisplay = document.querySelector("#colorDisplay");

let h1 = document.querySelector("h1");

let resetBtn = document.querySelector("#resetBtn");

let easyBtn = document.getElementById("easyBtn");

let normalBtn = document.getElementById("normalBtn");

let hardBtn = document.getElementById("hardBtn");

let winningColor = pickedColor();

colorDisplay.textContent = winningColor;

resetBtn.addEventListener("click", resetBtnFunc);

easyBtn.addEventListener("click", easyBtnFunc);
normalBtn.addEventListener("click", normalBtnFunc);
hardBtn.addEventListener("click", hardBtnFunc);

// Function to reset the game
function resetBtnFunc() {
    colors = generateRandomColors(6);
    winningColor = pickedColor();
    colorDisplay.textContent = winningColor;
    h1.style.background = "steelblue";
    messageDisplay.textContent = "";
    setupSquares(6);
}

// Easy Button Function (3 squares)
function easyBtnFunc() {
    colors = generateRandomColors(3);
    winningColor = pickedColor();
    colorDisplay.textContent = winningColor;
    setupSquares(3);
}

// Normal Button Function (6 squares)
function normalBtnFunc() {
    colors = generateRandomColors(6);
    winningColor = pickedColor();
    colorDisplay.textContent = winningColor;
    setupSquares(6);
}

// Hard Button Function (9 squares)
function hardBtnFunc() {
    colors = generateRandomColors(9);
    winningColor = pickedColor();
    colorDisplay.textContent = winningColor;
    setupSquares(9);
}

// Setup squares based on the selected mode
function setupSquares(numSquares) {
    // Show only the first 'numSquares' squares and hide the rest
    for (let i = 0; i < squares.length; i++) {
        if (i < numSquares) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "inline-block"; // Show square
            squares[i].addEventListener("click", squareClick);
        } else {
            squares[i].style.display = "none"; // Hide extra squares
        }
    }
}

// Square click handler
// Square click handler
function squareClick() {
    let clickedColor = this.style.backgroundColor;
    if (clickedColor === winningColor) {
        changeAllSquares(clickedColor);
        messageDisplay.textContent = "Correct!";
        h1.style.backgroundColor = clickedColor;
        setTimeout(resetBtnFunc, 3000); // Reset the game after 4 seconds
    } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again!";
    }
}

// Change all squares to the correct color
function changeAllSquares(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

// Pick a random color from the array
function pickedColor() {
    let randomColor = Math.floor(Math.random() * colors.length);
    return colors[randomColor];
}

// Generate an array of random colors
function generateRandomColors(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(randomColors());
    }
    return arr;
}

// Generate a random color (rgb format)
function randomColors() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Initialize the squares with 6 squares by default
setupSquares(6);
