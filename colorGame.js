let colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)"
];

let squares = document.querySelectorAll(".square");
let pickedColor = colors[3];
let colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	// Add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	// Add "clicl listeners" to squares
	squares[i].addEventListener("click", function(){
		// Grab color of picked square
		let clickedColor = this.style.backgroundColor;
		// compare color to pickedColor
		if (clickedColor === pickedColor) {
			alert("Correct!");
		} else {
			alert("Wrong!");
		}
	})
}