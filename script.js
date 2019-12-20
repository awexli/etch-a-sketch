function createRow() {
  const container = document.querySelector('#container');

  const row = document.createElement('div');
  row.classList.add('row');

  const grid = document.createElement('div');
  grid.classList.add('grid');

  row.appendChild(grid);

  container.appendChild(row);
}

function createColumn() {
  const row = document.querySelector('.row');
  const grid = document.createElement('div');
  grid.classList.add('grid');

  row.appendChild(grid);
}

for (let i = 0; i < 16; i++) {
  createColumn();
}



