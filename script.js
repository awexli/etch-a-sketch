function createRow(size) {
  const container = document.querySelector('#container');

  const row = document.createElement('div');
  row.classList.add('row');

  const square = document.createElement('div');
  square.classList.add('square');
  scaleSquare(square, size)
  addListener(square);

  row.appendChild(square);
  container.appendChild(row);
}

function createColumn(size) {
  const row = document.querySelectorAll('.row');
  row.forEach(rows => {
    const square = document.createElement('div');
    square.classList.add('square');
    scaleSquare(square, size)
    addListener(square);

    rows.appendChild(square);
  })
}

function createGrid(width, height) {
  let row = 0;
  let column = 0;

  for (row; row < height; row++) {
    createRow(width);
  }

  for (column; column < width - 1; column++) {
    createColumn(width);
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
  const dimension = document.getElementById('dimension');
  const changeButton = document.querySelector('#change');

  changeButton.addEventListener('click', () => {
    if (inputCheck(dimension.value)) {
      removeGrid();
      createGrid(dimension.value, dimension.value);
      dimension.value = "";
    }
  })
}

function removeGrid() {
  let removeRows = document.querySelectorAll('.row');
  removeRows.forEach(row => {
    row.remove();
  });
}

function inputCheck(dimension) {
  let message = document.getElementById("msg");
  message.innerHTML = "";
  try {
    if(dimension == "") throw "empty";
    if(isNaN(dimension)) throw "not a number";
    dimension = Number(dimension);
    if(dimension < 1) throw "too low";
    return true;
  }
  catch(err) {
    message.innerHTML = "Input is " + err;
    return false;
  }
}

function scaleSquare(square, size) {
  let newPadding = 256/size;
  square.style.padding = `${newPadding}px`;
}

function init() {
  createGrid(16,16);
  resetGrid();
  changeDimension();
}

init();
