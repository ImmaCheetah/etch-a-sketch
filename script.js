let colour = '#000000';

let buttonDiv = document.querySelector('.buttons')

let gridSizeBtn = document.createElement('button');
gridSizeBtn.textContent = "Grid Size";
buttonDiv.appendChild(gridSizeBtn);

let clearBtn = document.createElement('button');
clearBtn.textContent = "Clear";
buttonDiv.appendChild(clearBtn);

let randomBtn = document.createElement('button');
randomBtn.textContent = "Random";
buttonDiv.appendChild(randomBtn);

let check = true;

let colourBtn = document.createElement('input');
colourBtn.setAttribute('type', 'color');
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
            indivSquare.addEventListener('mouseover', ()  => {
                if (check) {
                    indivSquare.style.backgroundColor = colour;   
                } else {
                    indivSquare.style.backgroundColor = randomRGB();
                }
            }); 
        }
    }
} 


createGrid(24);

gridSizeBtn.addEventListener('click', promptUser);
colourBtn.addEventListener('change', () => colour = colourBtn.value);
randomBtn.addEventListener('click', () => {
    if (check) {
        check = false;
        randomBtn.style.backgroundColor = '#44BBA4';
    } else {
        check = true;
        randomBtn.style.backgroundColor = '#ffac53';
    }
});

let squares = document.querySelectorAll('.individual');

squares.forEach(square => {
      clearBtn.addEventListener('click', () => square.style.backgroundColor = 'white');
    });

function randomRGB() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return colour = `rgb(${r}, ${g}, ${b})`;
}


function promptUser() {
    let input = prompt('Enter size of grid ');
    if (input > 100 || input < 1) {
        alert('Please enter a number between 1 and 100');
    } else {
        container.innerHTML = '';
        createGrid(input);
        let squares = document.querySelectorAll('.individual');
        squares.forEach(square => {
            clearBtn.addEventListener('click', () => square.style.backgroundColor = 'white');
          });
    }
}


