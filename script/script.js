const SIZE = 16;
const DEFAULT_COLOR = '#4d4d4d';
let board = document.getElementById('board');

let colorInput = document.getElementById('color');
let reset = document.getElementById('reset');
let eraserMode = document.getElementById('eraserMode');
let colorMode = document.getElementById('colorMode');
let activeMode = document.querySelector('.activeMode');
let boardCells = document.querySelectorAll('.boardCell');

let mode = 'color';
colorMode.classList.add('activeMode');

let current_color = colorInput.value;

function handleColorInput() {
  current_color = this.value;
}

function handleEraserModeClick() {
  mode = 'erase'
  activeMode.classList.remove('activeMode')
  this.classList.toggle('activeMode')
  activeMode = this;
}

function handleColorModeClick() {
  mode = 'color'
  activeMode.classList.remove('activeMode')
  this.classList.toggle('activeMode')
  activeMode = this;
}

colorInput.addEventListener('input', handleColorInput);
eraserMode.addEventListener('click', handleEraserModeClick);
colorMode.addEventListener('click', handleColorModeClick);

function changeColor()
{
	if (mode == 'erase') {
		this.style.backgroundColor = DEFAULT_COLOR;
	}
	else if (mode == 'color'){
		this.style.backgroundColor = current_color;
	}
}

function resetBoard() {
  boardCells.forEach(function(cell) {
    cell.style.backgroundColor = DEFAULT_COLOR;
  });
}

function createGrid()
{
	board.style.gridTemplateColumns = `repeat(${SIZE}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${SIZE}, 1fr)`;

	for (let i = 0; i < (SIZE*SIZE) ; i++) 
	{
		let boardCell = document.createElement("div");
		boardCell.classList.add('boardCell');
		boardCell.addEventListener("click", changeColor);
 		board.appendChild(boardCell);	
	}
}

window.addEventListener('DOMContentLoaded', function() {
	createGrid();
});
