let gridSizeBtn = document.createElement('button');
gridSizeBtn.textContent = "Grid Size";
document.body.appendChild(gridSizeBtn);

let clearBtn = document.createElement('button');
clearBtn.textContent = "Clear";
document.body.appendChild(clearBtn);

// Create container to hold grid
let container = document.createElement('div');
container.className = 'container';
document.body.appendChild(container);


function createGrid(colNum) {
    let size = 500 / colNum;
    for (let i = 0; i < colNum; i++) {
        let square = document.createElement('div');
        container.appendChild(square).className = ('column square');
        
        for (let j = 0; j < colNum; j++) {
            let indivSquare = document.createElement('div');
            indivSquare.style.cssText = `height: ${size}px; width: ${size}px;`;
            square.appendChild(indivSquare).className = ('individual square');
            // Add event listener here to avoid duplicates being created every time the loop runs
            indivSquare.addEventListener('mouseover', () => indivSquare.style.backgroundColor = 'red');
        }
    }
    // let squares = document.querySelectorAll('.individual');

    // squares.forEach(square => {
    //     square.addEventListener('mouseover', () => square.style.backgroundColor = 'red');
    //   });
}

createGrid(24);

gridSizeBtn.addEventListener('click', promptUser);

function promptUser() {
    let input = prompt('Enter size of grid ');
    if (input > 100 || input < 1) {
        alert('Please enter a number between 1 and 100');
    } else {
        container.innerHTML = '';
        createGrid(input);
    }
}

