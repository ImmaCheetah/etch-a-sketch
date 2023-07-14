// Creating 16x16 grid


// Create container to hold grid
let container = document.createElement('div');
container.className = 'container';
document.body.appendChild(container);


// function createCol(colNum) { 
//     let column = document.createElement('div');
//     column.className = 'column';
//     container.appendChild(column);
//     for (i = 0; i < colNum; i++) {
//         let square = document.createElement('div');
//         column.appendChild(square).className = ('col square');
//     }
// }   

function createRow(rowNum) {
    for (i = 0; i < rowNum; i++) {
        let square = document.createElement('div');
        container.appendChild(square).className = ('row square');
        for (j = 0; j < rowNum; j++) {
            let innerSquare = document.createElement('div');
            square.appendChild(innerSquare).className = ('children square');
        }
    }
}

createRow(16);





// function createGrid(rowNum, colNum) {
//     for (i = 0; i < rowNum; i++) {
//         createCol(colNum);
//     }
// }




