import { GameBoard } from "./src/GameBoard.js";
import { IBlock } from "./src/IBlock.js";
import { JBlock } from "./src/JBlock.js";
import { LBlock } from "./src/LBlock.js";
import { OBlock } from "./src/OBlock.js";
import { SBlock } from "./src/SBlock.js";
import { TBlock } from "./src/TBlock.js";
import { ZBlock } from "./src/ZBlock.js";

const allBlocks = [SBlock, ZBlock, LBlock, JBlock, OBlock, TBlock, IBlock];

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
        case 'arrowup':
            if (currentBlock.canRotate(gameBoard)) {
                currentBlock.shapeIndex = (currentBlock.shapeIndex + 1) % currentBlock.shapes.length;
                gameBoard.draw(currentBlock);
            }
            break;
        case 'arrowdown':
            if (currentBlock.canMoveDown(gameBoard)) {
                currentBlock.moveDown();
                gameBoard.draw(currentBlock);
            }
            break;
        case ' ':
            while (currentBlock.canMoveDown(gameBoard)) {
                currentBlock.moveDown();
            }
            gameBoard.draw(currentBlock);
            break;
    }
});

const intervalId = setInterval(run, 700);

function run() {

    if (currentBlock.canMoveDown(gameBoard)) {
        currentBlock.moveDown();
    } else {
        currentBlock.stop(gameBoard);

        gameBoard.removeFullRows();

        if (currentBlock.isOutOfBounds()) {
            clearInterval(intervalId);
            gameBoard.gameOver();
        }

        currentBlock = generateNewBlock();
    }

    gameBoard.draw(currentBlock);

}

function generateNewBlock() {

    const i = Math.floor(Math.random() * allBlocks.length);
    return new allBlocks[i](gameBoard);

}