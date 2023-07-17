let buttonDiv = document.querySelector('.buttons')

let gridSizeBtn = document.createElement('button');
gridSizeBtn.textContent = "Grid Size";
buttonDiv.appendChild(gridSizeBtn);

let clearBtn = document.createElement('button');
clearBtn.textContent = "Clear";
buttonDiv.appendChild(clearBtn);

let colourBtn = document.createElement('input');
colourBtn.setAttribute('type', 'color');
colourBtn.setAttribute('value', '#000000');
buttonDiv.appendChild(colourBtn);

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
            indivSquare.style.cssText = `height: ${size-2}px; width: ${size-2}px;`;
            square.appendChild(indivSquare).className = ('individual square');
            // Add event listener here to avoid duplicates being created every time the loop runs
            indivSquare.addEventListener('mouseover', () => indivSquare.style.backgroundColor = 'black');
        }
    }
    
}

createGrid(24);

gridSizeBtn.addEventListener('click', promptUser);

colourBtn.addEventListener('click', setColour)


let squares = document.querySelectorAll('.individual');

squares.forEach(square => {
    clearBtn.addEventListener('click', () => square.style.backgroundColor = 'white');
  });

function clear() {
    let canvas = document.querySelectorAll('.individual');
    canvas.style.backgroundColor = 'white';
    console.log(canvas);
}

function promptUser() {
    let input = prompt('Enter size of grid ');
    if (input > 100 || input < 1) {
        alert('Please enter a number between 1 and 100');
    } else {
        container.innerHTML = '';
        createGrid(input);
    }
}

