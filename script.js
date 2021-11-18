const container = document.querySelector('.container');

let docFrag = document.createDocumentFragment();
const canvasSize = 960;
let numberOfSquares = 16;
let sizeOfSquare = canvasSize / numberOfSquares;


for(let i = 1; i <= numberOfSquares; i++) {
    let rowDiv = document.createElement('div');
    for(let j = 1; j <= numberOfSquares; j++) {
        let div = document.createElement('div');
        div.classList.add('divsquare');
        div.style.width = `${sizeOfSquare}px`;
        div.style.height = `${sizeOfSquare}px`;
        rowDiv.appendChild(div);
        docFrag.appendChild(rowDiv);
    }
}

container.append(docFrag);

squares = document.querySelectorAll('.divsquare');

squares.forEach(square => {
    square.addEventListener('mouseover', () => {
        // please for the love of God someone explain to me why
        // that extra step with the arrow function is necessary and I
        // can't just stick my desired function in there next to mouseover
        drawSquare(square);
    });
});

function drawSquare(square) {
    square.classList.add('colouredIn');
}

clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => clearSketch());

function clearSketch() {
    getSketchSize();
    
}

function getSketchSize() {
    let choice = parseInt(prompt(`Please enter the desired number of squares
     per row/column.\n\nThe grid size will stay the same, so more squares
     means higher resolution.\nNo more than 100, please.`));
    if (!choice || choice > 100) {
        getSketchSize();
    } else {
        alert("Yoohoo!");
    }
}