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
    if (inputCheck(width.value, height.value)) {
      if (width.value != 0 && height.value != 0){
        removeGrid();
        createGrid(width.value, height.value);
      } else {
        removeGrid();
        createGrid(16,16);
      }
      width.value = "";
      height.value = "";
    }
  })
}

function removeGrid() {
  let removeRows = document.querySelectorAll('.row');
  removeRows.forEach(row => {
    row.remove();
  });
}

function inputCheck(width, height) {
  let message = document.getElementById("msg");
  message.innerHTML = "";
  try {
    if(width == "" || height == "") throw "empty";
    if(isNaN(width) || isNaN(height)) throw "not a number";
    width = Number(width);
    height = Number(height);
    if(width < 1 || height < 1) throw "too low";
    if(width > 16 || height > 16) throw "too high";
    return true;
  }
  catch(err) {
    message.innerHTML = "An input is " + err;
    return false;
  }
}

function init() {
  createGrid(16,16);
  resetGrid();
  changeDimension();
}

init();
