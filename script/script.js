const SIZE = 16;

let colorInput = document.getElementById('color');
colorInput.addEventListener('input', function() {
  current_color = this.value;
});

let current_size = SIZE;
let current_color = colorInput.value;

let board = document.getElementById('board');

function changeColor()
{
	this.style.backgroundColor = current_color;
}

function createGrid()
{
	board.style.gridTemplateColumns = `repeat(${current_size}, 1fr)`
  board.style.gridTemplateRows = `repeat(${current_size}, 1fr)`

	for (let i = 0; i < (current_size*current_size) ; i++) 
	{
		let boardCell = document.createElement("div");
		boardCell.classList.add('boardCell')
		boardCell.addEventListener("click", changeColor)
 		board.appendChild(boardCell);	
	}
}

createGrid()
