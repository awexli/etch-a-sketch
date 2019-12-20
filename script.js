function createRow() {
  const container = document.querySelector('#container');

  const row = document.createElement('div');
  row.classList.add('row');

  const square = document.createElement('div');
  square.classList.add('square');
  addListener(square);

  row.appendChild(square);
  container.appendChild(row);
}

function createColumn() {
  const row = document.querySelectorAll('.row');
  row.forEach(rows => {
    const square = document.createElement('div');
    square.classList.add('square');
    addListener(square);

    rows.appendChild(square);
  })
}

function createGrid(width, height) {
  let row = 0;
  let column = 0;

  for (row; row < height; row++) {
    createRow();
  }

  for (column; column < width - 1; column++) {
    createColumn();
  }
}

function addListener(square){
  square.addEventListener('mouseenter', e => {
    e.srcElement.style.backgroundColor = getRandomColor();
  });
}

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function resetGrid() {
  const reset = document.querySelector('.button');
  reset.addEventListener('click', () => {
    const allSquares = document.querySelectorAll('.square');
    allSquares.forEach(square => {
      square.style.backgroundColor = "white";
    });
  })
}

function changeDimension() {
  const width = document.getElementById('width');
  const height = document.getElementById('height');
  const changeButton = document.querySelector('#change');
  
  changeButton.addEventListener('click', () => {
    if (width.value != 0 && height.value != 0){
      removeGrid();
      createGrid(width.value, height.value);
    } else {
      removeGrid();
      createGrid(16,16);
    }
    
  })
}

function removeGrid() {
  let removeRows = document.querySelectorAll('.row');
    removeRows.forEach(row => {
      row.remove();
  });
}

function init() {
  createGrid(16,16);
  resetGrid();
  changeDimension();
}

init();
