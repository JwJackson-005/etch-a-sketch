let cursorColor = 'rainbow';
let gridHeight = 20;
let gridWidth = 40;

function buildGrid() {
    const container = document.querySelector('#gridContainer');
    container.style.gridTemplateRows = `repeat(${gridHeight}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${gridWidth}, 1fr)`;


    for (let i = 0; i < gridWidth*gridHeight; i++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('mouseover', color);
        container.appendChild(cell);
    }
}

function color(e) {
        const cell = e.target;
        if (cursorColor !== 'rainbow') {
            cell.style.backgroundColor = cursorColor;
        }
        else {
            console.log('in rainbow');
            let red = Math.random() * 256;
            let green = Math.random() * 256;
            let blue = Math.random() * 256;
            cell.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        }
}

function addButtonListeners() {
    const controlButtons = document.querySelectorAll('button.controls');
    const sizeButtons = document.querySelectorAll('button.sizeControls');

    for (let button of controlButtons) {
        if (button.id === 'clearButton') {
            button.addEventListener('click', clearGrid);
        }
        else {
            if (button.id === 'eraserButton') {
                button.addEventListener('click', () => setCursorColor('white'));
            }
            else {
                let color = button.id.replace('Button', '');
                button.addEventListener('click', () => setCursorColor(color));
            }
        }
    }

    for (let button of sizeButtons) {
        button.addEventListener('click', () => setGridSize(button.id.replace('Button', '')));
    }
}

function setGridSize(size) {
    console.log(size);
    if (size === 'small') {
        console.log('small');
        gridHeight = 100;
        gridWidth = 200;
    }
    else if (size === 'medium') {
        gridHeight = 50;
        gridWidth = 100;
    }
    else {
        gridHeight = 20;
        gridWidth = 40;
    }
    clearGrid();
}

function setCursorColor(color) {
    cursorColor = color;
    const thumbsticks = document.querySelectorAll('.thumbStick');

    for (let thumbstick of thumbsticks) {
        if (color === 'rainbow') {
            thumbstick.style.cssText = 'background: linear-gradient(to right, red, orange, yellow, green, cyan, blue, violet);';
        }
        else {
        thumbstick.style.cssText = `background: ${color};`
        }
    }
}

function initialize() {
    buildGrid();
    addButtonListeners();
}

function clearGrid() {
    const cells = document.querySelectorAll('.cell');

    for (let cell of cells) {
        cell.remove();
    }

    //gridSize = getGridSize();
    buildGrid();
}
// function no longer used
function getGridSize() {
    let answer = 0;

    do {
    answer = prompt('Enter a grid size (1-100)');
    answer = parseInt(answer);
    } while(!Number.isInteger(answer) || answer < 1 || answer > 100);

    return answer;

}


initialize();