// paint board configuration
const SIZE = 16;
const DEFAULT_COLOR = '#4d4d4d';
let board = document.getElementById('board');

// config buttons
let colorInput = document.getElementById('color');
let reset = document.getElementById('reset');
let eraserMode = document.getElementById('eraserMode');
let colorMode = document.getElementById('colorMode');

// default mode 
let mode = 'color';
colorMode.classList.add('activeMode');
let activeMode = document.querySelector('.activeMode');

let current_size = SIZE;
let current_color = colorInput.value;

// event listeners
colorInput.addEventListener('input', function() {current_color = this.value;});
eraserMode.addEventListener('click', function(){
	mode = 'erase'
	activeMode.classList.remove('activeMode')
	this.classList.toggle('activeMode')
  activeMode = this;
});
colorMode.addEventListener('click', function(){
	mode = 'color'
	activeMode.classList.remove('activeMode')
	this.classList.toggle('activeMode')
  activeMode = this;
});
reset.addEventListener('click', resetBoard)

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
  let boardCells = document.querySelectorAll('.boardCell');
  boardCells.forEach(function(cell) {
    cell.style.backgroundColor = DEFAULT_COLOR;
  });
}

function createGrid()
{
	board.style.gridTemplateColumns = `repeat(${current_size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${current_size}, 1fr)`;

	for (let i = 0; i < (current_size*current_size) ; i++) 
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
