const container = document.querySelector('.container'); // the container
const canvasSize = 960;                                 // its size
let numberOfSquares = 16;                               // default number of squares
let sizeOfSquare = canvasSize / numberOfSquares;        // size of each square at the start

drawCanvas(numberOfSquares);                            // create the canvas; needs to be a function
                                                        // for reuse when resetting it

// This function creates the canvas, or resets it                                                        
function drawCanvas(numberOfSquares) {
    let docFrag = document.createDocumentFragment();
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
    container.innerHTML = "";
    container.append(docFrag);
    makeSquaresWork();
}

// This function adds the event listener to each canvas square
// Needs to be a function so it gets done every time the canvas is reset

function makeSquaresWork() {
    squares = document.querySelectorAll('.divsquare');

    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            // please for the love of God someone explain to me why
            // that extra step with the arrow function is necessary and I
            // can't just stick my desired function in there next to mouseover
            drawSquare(square);
        });
    });
}


// This function actually changes a square's colour and gets called by the event listener
function drawSquare(square) {
    square.classList.add('colouredIn');
}

// Reset button with associated functions
// To do: Make this a graphical UI element instead of a prompt despite the instructions
// because that is what everyone else is doing and it is admittedly prettier and more mobile friendly

clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => clearSketch());

function clearSketch() {
    numberOfSquares = getSketchSize();
    sizeOfSquare = canvasSize / numberOfSquares;
    drawCanvas(numberOfSquares);
    
}

function getSketchSize() {
    let choice = parseInt(prompt(`Please enter the desired number of squares
     per row/column.\n\nThe grid size will stay the same, so more squares
     means higher resolution.\nNo more than 100, please.`));
    if (!choice || choice > 100) {
        getSketchSize();
    } else {
        return choice;
    }
}