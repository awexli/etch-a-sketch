function createRow() {
  const container = document.querySelector('#container');

  const row = document.createElement('div');
  row.classList.add('row');

  const square = document.createElement('div');
  square.classList.add('square');

  row.appendChild(square);

  container.appendChild(row);
}

function createColumn() {
  const row = document.querySelectorAll('.row');
  row.forEach(rows => {
    const square = document.createElement('div');
    square.classList.add('square');

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


createGrid(16,16);
