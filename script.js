
let button = document.createElement('button');
document.body.appendChild(button);

// Create container to hold grid
let container = document.createElement('div');
container.className = 'container';
document.body.appendChild(container);




function createGrid(rowNum) {
    for (let i = 0; i < rowNum; i++) {
        let square = document.createElement('div');
        container.appendChild(square).className = ('row square');
        for (let j = 0; j < rowNum; j++) {
            let indivSquare = document.createElement('div');
            square.appendChild(indivSquare).className = ('individual square');
        }
    }
}

createGrid(16);

let squares = document.querySelectorAll('.individual');

squares.forEach(square => {
    square.addEventListener('mouseover', () => square.style.backgroundColor = 'red');
  });










