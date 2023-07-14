// Creating 16x16 grid


// Create container to hold grid
let container = document.createElement('div');
container.className = 'container';
document.body.appendChild(container);

createCol(16);

function createCol(colNum) { 
    for (i = 0; i < colNum; i++) {
        let square = document.createElement('div');
        container.appendChild(square).className = ('col square');
    }
}      

