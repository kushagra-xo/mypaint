// Constants
const SIZE = 16;
const DEFAULT_COLOR = '#4d4d4d';
const HOVER_COLOR = '#c3c3c3';

// DOM elements
let board = document.getElementById('board');
let colorInput = document.getElementById('color');
let reset = document.getElementById('reset');
let eraserMode = document.getElementById('eraserMode');
let colorMode = document.getElementById('colorMode');
let boardCells = document.querySelectorAll('.boardCell');

// State variables
let isClicked = false;
let mode = 'color';
let activeMode = colorMode;
activeMode.classList.add('activeMode');
let current_color = colorInput.value;

// Event handlers
function handleColorInput() {
 current_color = this.value;
}

function handleEraserModeClick() {
 mode = 'erase';
 activeMode.classList.remove('activeMode');
 this.classList.toggle('activeMode');
 activeMode = this;
}

function handleColorModeClick() {
 mode = 'color';
 activeMode.classList.remove('activeMode');
 this.classList.toggle('activeMode');
 activeMode = this;
}

function mouseEffectIn() {
 if (this.dataset.color == DEFAULT_COLOR) {
   this.style.backgroundColor = HOVER_COLOR;
 }
}

function mouseEffectOut() {
 if (this.dataset.color != DEFAULT_COLOR) {
   return;
 }
 this.style.backgroundColor = DEFAULT_COLOR;
}

function changeColor() {
 isClicked = true;
 if (mode == 'erase') {
   this.style.backgroundColor = DEFAULT_COLOR;
   this.dataset.color = DEFAULT_COLOR;
 } else if (mode == 'color') {
   this.style.backgroundColor = current_color;
   this.dataset.color = current_color;
 }
}

function resetBoard() {
 boardCells.forEach(function(cell) {
   cell.style.backgroundColor = DEFAULT_COLOR;
 });
}

function createGrid() {
 board.style.gridTemplateColumns = `repeat(${SIZE}, 1fr)`;
 board.style.gridTemplateRows = `repeat(${SIZE}, 1fr)`;

 for (let i = 0; i < (SIZE * SIZE); i++) {
   let boardCell = document.createElement("div");
   boardCell.classList.add('boardCell');
   boardCell.dataset.color = DEFAULT_COLOR;
   boardCell.addEventListener("mousedown", changeColor);
   boardCell.addEventListener('mouseenter', mouseEffectIn);
   boardCell.addEventListener('mouseleave', mouseEffectOut);
   board.appendChild(boardCell);
 }
}

// Event listeners
colorInput.addEventListener('input', handleColorInput);
eraserMode.addEventListener('click', handleEraserModeClick);
colorMode.addEventListener('click', handleColorModeClick);

// Initialization
window.addEventListener('DOMContentLoaded', createGrid);
