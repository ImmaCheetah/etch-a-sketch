// Create container to hold grid
let container = document.createElement('div');
container.className = 'container';
document.body.appendChild(container);

function createGrid(rowNum) {
    for (i = 0; i < rowNum; i++) {
        let square = document.createElement('div');
        container.appendChild(square).className = ('row square');
        for (j = 0; j < rowNum; j++) {
            let indivSquare = document.createElement('div');
            square.appendChild(indivSquare).className = ('individual square');
        }
    }
}

createGrid(16);

let individual = document.querySelector('.individual');
console.log(individual);
individual.addEventListener('mouseover', paint);

function paint(e) {
    individual.style.backgroundColor = 'black';
}







