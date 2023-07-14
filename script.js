// Creating 16x16 grid


// Create container to hold grid
let container = document.createElement('div');
container.className = 'container';
document.body.appendChild(container);



createCol(16);
createCol(16);

function createCol(colNum) { 
    let column = document.createElement('div');
    column.className = 'column';
    container.appendChild(column);
    for (i = 0; i < colNum; i++) {
        let square = document.createElement('div');
        column.appendChild(square).className = ('col square');
    }
    // let columns = document.querySelectorAll('.col square');
    // document.column.appendChild(columns);   
}   

function createRow(rowNum) {

}


