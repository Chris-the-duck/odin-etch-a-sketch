const container = document.querySelector('.container'); // the container
const canvasSize = 960;                                 // its size
let numberOfSquares = 16;                               // default number of squares
let sizeOfSquare = canvasSize / numberOfSquares;        // size of each square at the start

drawCanvas(numberOfSquares);                            // create the canvas; needs to be a function
                                                        // for reuse when resetting it

// Set up variables for colour toggles
let black = 1;
let rainbow = 0;
let transparent = 0;

// variables for shades of gray

const gray1 = 'rgb(229, 229, 229)';
const gray2 = 'rgb(204, 204, 204)';
const gray3 = 'rgb(178, 178, 178)';
const gray4 = 'rgb(153, 153, 153)';
const gray5 = 'rgb(127, 127, 127)';
const gray6 = 'rgb(102, 102, 102)';
const gray7 = 'rgb(76, 76, 76)';
const gray8 = 'rgb(51, 51, 51)';
const gray9 = 'rgb(25, 25, 25);'


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
            drawSquare(square);
            // please for the love of God someone explain to me why
            // that extra step with the arrow function is necessary and I
            // can't just stick my desired function in there next to mouseover
        });
    });
}


// This function actually changes a square's colour and gets called by the event listener

function drawSquare(square) {
    if (black) {square.style.backgroundColor = '#000';}
    else if (rainbow) {square.style.backgroundColor = colourPicker();}
    else if (transparent) {transparentIncrementer(square);}
}

// Function that makes square 10% black if currently white and otherwise adds more black
// Using alpha or opacity will let the body background colour shine through so Imma actually have to cheat
// and use shades of grey

function transparentIncrementer(square) {
    if (square.style.backgroundColor == gray1) {
        square.style.backgroundColor = gray2;
    }
    else if (square.style.backgroundColor == gray2) {
        square.style.backgroundColor = gray3;
    }
    else if (square.style.backgroundColor == gray3) {
        square.style.backgroundColor = gray4;
    }
    else if (square.style.backgroundColor == gray4) {
        square.style.backgroundColor = gray5;
    }
    else if (square.style.backgroundColor == gray5) {
        square.style.backgroundColor = gray6;
    }
    else if (square.style.backgroundColor == gray6) {
        square.style.backgroundColor = gray7;
    }
    else if (square.style.backgroundColor == gray7) {
        square.style.backgroundColor = gray8;
    }
    else if (square.style.backgroundColor == gray8) {
        square.style.backgroundColor = gray9;
    }
    else if (square.style.backgroundColor == gray9) {
        square.style.backgroundColor = '#000';
    }
    else {
        square.style.backgroundColor = gray1;
    }
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

// Colour change button functions

blackButton = document.querySelector('.black');
rainbowButton = document.querySelector('.rainbow');
transparentButton = document.querySelector('.transparent');

blackButton.addEventListener('click', () => allBlack());
rainbowButton.addEventListener('click', () => makeRainbow());
transparentButton.addEventListener('click', () => makeTransparent());

function allBlack() {               // I could probably write this as one function that does a toggle
    black = 1;                      // but I don't think I want to
    rainbow = 0;
    transparent = 0;
}

function makeRainbow() {
    black = 0;
    rainbow = 1;
    transparent = 0;
}

function makeTransparent() {
    black = 0;
    rainbow = 0;
    transparent = 1;
}

// Function that picks a random RGB value
// Yeah just gonna go ahead and nick this off StackOverflow
function colourPicker() {
    let randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    let r = randomBetween(0, 255);
    let g = randomBetween(0, 255);
    let b = randomBetween(0, 255);
    let rgb = `rgb(${r},${g},${b})`;
    return rgb;
}
