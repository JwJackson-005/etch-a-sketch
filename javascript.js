let gridSize = 20;

function buildGrid() {
    const container = document.querySelector('#gridContainer');
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;


    for (let i = 0; i < gridSize*gridSize; i++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('mouseover', color);
        container.appendChild(cell);
    }
}

function color(e) {
        const cell = e.target;
        cell.style.backgroundColor = 'black';
}

function initialize() {
    const clearButton = document.querySelector('#clearButton');
    clearButton.addEventListener('click', clearGrid);
    buildGrid();
}

function clearGrid() {
    const cells = document.querySelectorAll('.cell');

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