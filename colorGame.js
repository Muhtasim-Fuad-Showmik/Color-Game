let numSquares = 6;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

init();

resetButton.addEventListener("click", function(){
	reset();
})

function changeColors(color){
	// Loop through all squares
	for (var i = 0; i < squares.length; i++) {
		// Change each color to mach given color
		squares[i].style.backgroundColor = color;	
	}
}

function pickColor(){
	let random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	// make an array
	let arr = [];
	// add num random colors to array
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	// return that array
	return arr;
}

function randomColor(){
	// pick a "red" from 0-255
	let r = Math.floor(Math.random() * 256);
	// pick a "green" from 0-255
	let g = Math.floor(Math.random() * 256);
	// pick a "blue" from 0-255
	let b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function reset(){
	colors = generateRandomColors(numSquares);
	// Pick a new random color from array
	pickedColor = pickColor();
	// Change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	// Change reset button back to "New Colors"
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	// Change color of squares
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	// Change color of h1 background
	h1.style.backgroundColor = "steelblue";
}

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
	for(let i=0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setupSquares(){
	for (var i = 0; i < squares.length; i++) {
		// Add "click listeners" to squares
		squares[i].addEventListener("click", function(){
			// Grab color of picked square
			let clickedColor = this.style.backgroundColor;
			// compare color to pickedColor
			if (clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = "Play Again";
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		})
	}
}