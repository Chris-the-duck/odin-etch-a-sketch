const container = document.querySelector('.container');

let docFrag = document.createDocumentFragment();

for(let i = 1; i <= 16; i++) {
    let rowDiv = document.createElement('div');
    for(let j = 1; j <= 16; j++) {
        let div = document.createElement('div');
        div.classList.add('divsquare');
        rowDiv.appendChild(div);
        docFrag.appendChild(rowDiv);
    }
}

container.append(docFrag);


