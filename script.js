// Creating 16x16 grid


// Create container to hold grid
let container = document.createElement('div');
container.className = 'container';
document.body.appendChild(container);

createRow(16);

function createRow(rowNum) { 
    for (i = 0; i < rowNum; i++) {
        let square = document.createElement('div');
        container.appendChild(square).className = ('row square');
    }
}