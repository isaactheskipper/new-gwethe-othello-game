
const board1 = document.getElementById('board1');
const board2 = document.getElementById('board2');
const board3 = document.getElementById('board3');
const board4 = document.getElementById('board4');
const board5 = document.getElementById('board5');


function createBoard(board, whitePositions, blackPositions, greyPositions,lightGreyPosition) {
    board.style.backgroundColor = 'green';
    board.style.display = 'grid';
    board.style.gridTemplateColumns = 'repeat(8, 100px)';
    board.style.gridTemplateRows = 'repeat(8, 100px)';
    board.style.gap = '5px';
    board.style.width = 'fit-content';
    board.style.padding = '5px';
    board.style.marginTop = '10px';


    for (let i = 0; i < 64; i++) {
        const grid = document.createElement('div'); 
        grid.style.border = 'solid';
        grid.style.height = '100px';
        grid.style.width = '100px';
        grid.style.position = 'relative';
        grid.setAttribute('id', 'grid-' + i); 

        
        if (whitePositions.includes(i)) {
            const disc = document.createElement('div');
            disc.style.width = '80px';
            disc.style.height = '80px';
            disc.style.borderRadius = '50%';
            disc.style.position = 'absolute';
            disc.style.top = '50%';
            disc.style.left = '50%';
            disc.style.transform = 'translate(-50%, -50%)';
            disc.style.backgroundColor = 'white';
            grid.appendChild(disc); 
        }

        if (blackPositions.includes(i)) {
            const disc = document.createElement('div');
            disc.style.width = '80px';
            disc.style.height = '80px';
            disc.style.borderRadius = '50%';
            disc.style.position = 'absolute';
            disc.style.top = '50%';
            disc.style.left = '50%';
            disc.style.transform = 'translate(-50%, -50%)';
            disc.style.backgroundColor = 'black';
            grid.appendChild(disc); 
        }

        
        if (greyPositions.includes(i)) {
            const disc = document.createElement('div');
            disc.style.width = '80px';
            disc.style.height = '80px';
            disc.style.borderRadius = '50%';
            disc.style.position = 'absolute';
            disc.style.top = '50%';
            disc.style.left = '50%';
            disc.style.transform = 'translate(-50%, -50%)';
            disc.style.backgroundColor = 'black';
            disc.style.opacity = '0.5'
            grid.appendChild(disc); 
        }
 
        if (lightGreyPosition.includes(i)) {
            const disc = document.createElement('div');
            disc.style.width = '80px';
            disc.style.height = '80px';
            disc.style.borderRadius = '50%';
            disc.style.position = 'absolute';
            disc.style.top = '50%';
            disc.style.left = '50%';
            disc.style.transform = 'translate(-50%, -50%)';
            disc.style.backgroundColor = 'white';
            disc.style.opacity = '0.5'
            grid.appendChild(disc); 
        }

        board.appendChild(grid);
    }
}


createBoard(board1, [27, 36], [28, 35], [],[]); 
createBoard(board2, [27, 36], [28, 35],[19,26,37,44],[]);
createBoard(board3, [36],[19,27,28,35], [],[]);          
createBoard(board4, [36],[19,27,28,35], [],[18,20,34]); 
createBoard(board5,[34,35,36,],[19,27,28],[],[]);


// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    const cookieBanner = document.getElementById('cookieConsent');
    const acceptButton = document.getElementById('acceptCookies');

    // When the accept button is clicked
    acceptButton.addEventListener('click', function () {
        cookieBanner.style.display = 'none'; // Hide the banner
    });
});

