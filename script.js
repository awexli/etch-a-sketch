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


createGrid(16,16);
