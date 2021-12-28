let gridSize = 100;

function buildGrid() {
    const container = document.querySelector('#gridContainer');
    const gridLength = container.clientHeight;
    console.log(gridLength);

    for (let i = 0; i < gridSize; i++){
        let row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < gridSize; j++) {
            let col = document.createElement('div');
            col.classList.add('col');
            col.style.height = `${gridLength/gridSize}px`;
            col.style.width = `${gridLength/gridSize}px`;
            col.style.backgroundColor = 'white';
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

function initialize() {
    const clearButton = document.querySelector('#clearButton');
    clearButton.addEventListener('click', clearGrid);
    buildGrid();
}

function clearGrid() {
    const cells = document.querySelectorAll('.col');

    for (let cell of cells) {
        cell.remove();
    }

    gridSize = getGridSize();
    buildGrid();
}

function getGridSize() {
    let answer = 0;

    do {
    answer = prompt('Enter a grid size (1-100)');
    answer = parseInt(answer);
    } while(!Number.isInteger(answer) || answer < 1 || answer > 100);

    return answer;

}


initialize();