import { GameBoard } from "./src/GameBoard.js";
import { SBlock } from "./src/SBlock.js";
import { ZBlock } from "./src/ZBlock.js";


const allBlocks = [SBlock, ZBlock];

const gameBoard = new GameBoard();
let currentBlock = generateNewBlock();

document.addEventListener('keydown', e => {
    switch (e.key.toLowerCase()) {
        case 'arrowleft':
            if (currentBlock.canMoveLeft(gameBoard)) {
                currentBlock.moveLeft();
                gameBoard.draw(currentBlock);
            }
            break;
            
        case 'arrowright':

            if (currentBlock.canMoveRight(gameBoard)) {
                currentBlock.moveRight();
                gameBoard.draw(currentBlock);
            }
            break;
        }
});


const intervalId = setInterval(run, 200);

function run() {
    if (currentBlock.canMoveDown(gameBoard)) {
        currentBlock.moveDown();
    } else {
        currentBlock.stop(gameBoard)
        currentBlock = generateNewBlock();  
    }
    
    gameBoard.draw(currentBlock);
}

function generateNewBlock() {
    const i = Math.floor(Math.random() * allBlocks.length);
    return new allBlocks[i]();
}