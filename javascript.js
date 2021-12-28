let gridSize = 4;

function buildGrid() {
    const container = document.querySelector('#gridContainer');

    for (let i = 0; i < gridSize; i++){
        let row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < gridSize; j++) {
            let col = document.createElement('div');
            col.classList.add('col');
            col.addEventListener('mouseenter', color);
            row.appendChild(col);
        }
        container.appendChild(row);
    }
}

function color(e) {
        const cell = e.target;
        cell.style.backgroundColor = 'red';
}

buildGrid();