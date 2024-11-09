const board1 = document.getElementById('board1');
const board2 = document.getElementById('board2');
const board3 = document.getElementById('board3');
const board4 = document.getElementById('board4');
const board5 = document.getElementById('board5');

function createBoard(board, whitePositions, blackPositions, greyPositions, lightGreyPosition) {
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
            const disc = createDisc('white');
            grid.appendChild(disc); 
        }

        if (blackPositions.includes(i)) {
            const disc = createDisc('black');
            grid.appendChild(disc); 
        }

        if (greyPositions.includes(i)) {
            const disc = createDisc('black', 0.5);
            disc.classList.add('grey-disc'); // Add class for later selection
            grid.appendChild(disc); 
        }

        if (lightGreyPosition.includes(i)) {
            const disc = createDisc('white', 0.5);
            disc.classList.add('light-grey-disc'); // Add class for later selection
            grid.appendChild(disc); 
        }

        board.appendChild(grid);
    }
}

function createDisc(color, opacity = 1) {
    const disc = document.createElement('div');
    disc.style.width = '80px';
    disc.style.height = '80px';
    disc.style.borderRadius = '50%';
    disc.style.position = 'absolute';
    disc.style.top = '50%';
    disc.style.left = '50%';
    disc.style.transform = 'translate(-50%, -50%)';
    disc.style.backgroundColor = color;
    disc.style.opacity = opacity;
    return disc;
}

// Animate grey discs on board2 to appear and disappear in sequence
function animateGreyDiscs(board) {
    const greyDiscs = board.querySelectorAll('.grey-disc');
    let index = 0;

    setInterval(() => {
        greyDiscs.forEach((disc, i) => {
            disc.style.visibility = i === index ? 'visible' : 'hidden';
        });
        index = (index + 1) % greyDiscs.length;
    }, 1000); // Change interval as needed
}

// Animate light grey discs on board4 to appear and disappear in sequence
function animateLightGreyDiscs(board) {
    const lightGreyDiscs = board.querySelectorAll('.light-grey-disc');
    let index = 0;

    setInterval(() => {
        lightGreyDiscs.forEach((disc, i) => {
            disc.style.visibility = i === index ? 'visible' : 'hidden';
        });
        index = (index + 1) % lightGreyDiscs.length;
    }, 1000); // Adjust interval time as needed
}

// Function to toggle the black disc at index 19 and flip 27 on board3
function toggleBlackDiscAndFlip(board) {
    const grid19 = board.querySelector('#grid-19');
    const grid27 = board.querySelector('#grid-27');
    
    setInterval(() => {
        // Create or remove black disc at index 19
        if (!grid19.querySelector('.black-disc')) {
            const blackDisc = createDisc('black');
            blackDisc.classList.add('black-disc');
            grid19.appendChild(blackDisc);

            // Set timeout to flip index 27 from white to black after 2 seconds
            setTimeout(() => {
                const discAt27 = grid27.querySelector('div');
                if (discAt27) {
                    discAt27.style.backgroundColor = 'black';
                } else {
                    const newBlackDisc = createDisc('black');
                    grid27.appendChild(newBlackDisc);
                }
            }, 1000);
        } else {
            // Remove the disc at index 19
            grid19.innerHTML = '';

            // Flip index 27 back to white
            const discAt27 = grid27.querySelector('div');
            if (discAt27) {
                discAt27.style.backgroundColor = 'white';
            }
        }
    }, 2000); // Repeat every 4 seconds (2 seconds wait, 2 seconds display)
}

// Function to toggle the white disc at index 34 and flip 35 on board5
function toggleWhiteDiscAndFlip(board) {
    const grid34 = board.querySelector('#grid-34');
    const grid35 = board.querySelector('#grid-35');
    
    setInterval(() => {
        // Create or remove black disc at index 34
        if (!grid34.querySelector('.white-disc')) {
            const whiteDisc = createDisc('white');
            whiteDisc.classList.add('white-disc');
            grid34.appendChild(whiteDisc);

            // Set timeout to flip index 35 from black to white after 2 seconds
            setTimeout(() => {
                const discAt35 = grid35.querySelector('div');
                if (discAt35) {
                    discAt35.style.backgroundColor = 'white';
                } else {
                    const newWhiteDisc = createDisc('white');
                    grid35.appendChild(newWhiteDisc);
                }
            }, 1000);
        } else {
            // Remove the disc at index 34
            grid34.innerHTML = '';

            // Flip index 35 white to black
            const discAt35 = grid35.querySelector('div');
            if (discAt35) {
                discAt35.style.backgroundColor = 'black';
            }
        }
    }, 2000); // Repeat every 4 seconds (2 seconds wait, 2 seconds display)
}
createBoard(board1, [27, 36], [28, 35], [], []); 
createBoard(board2, [27, 36], [28, 35], [19, 26, 37, 44], []);
createBoard(board3, [36,27], [28, 35], [], []);          
createBoard(board4, [36], [19, 27, 28, 35], [], [18, 20, 34]); 
createBoard(board5, [34, 35, 36], [19, 27, 28], [], []);

// Start animations after DOM loads
document.addEventListener('DOMContentLoaded', function () {
    animateGreyDiscs(board2);
    animateLightGreyDiscs(board4); // Start animation for light grey discs on board4

    // Continuously toggle black disc at index 19 and flip 27 on board3
    toggleBlackDiscAndFlip(board3);
    toggleWhiteDiscAndFlip(board5);
});
