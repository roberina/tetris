class Block {

    y = 0;
    x = 4;

    shapeIndex = 0;


    moveDown() {
        this.y++;    
    }

    moveLeft () {
        this.x--
    }

    moveRight () {
        this.x++
    }

    canMoveDown ( gameBoard ) {
        let ret = true;


        if ( this.y + this.shapes[this.shapeIndex].height == gameBoard.height ) {
            return false;
        }

        this.shapes[this.shapeIndex].shape.forEach( el => {
            const y = el[0] + this.y + 1;
            const x = el[1] + this.x;

            if (gameBoard.state[y][x]) {
                ret = false
            }

        })

        return ret
    }

    canMoveLeft ( gameBoard ) {
        let ret = true;


        if ( this.x == 0 ) {
            return false;
        }

        this.shapes[this.shapeIndex].shape.forEach( el => {
            const y = el[0] + this.y;
            const x = el[1] + this.x - 1;

            if (gameBoard.state[y][x]) {
                ret = false
            }

        })

        return ret
    }

    canMoveRight ( gameBoard ) {
        let ret = true;


        if ( this.x + this.shapes[this.shapeIndex].width == gameBoard.width ) {
            return false;
        }

        this.shapes[this.shapeIndex].shape.forEach( el => {
            const y = el[0] + this.y;
            const x = el[1] + this.x + 1;

            if (gameBoard.state[y][x]) {
                ret = false
            }

        })

        return ret
    }

    

    stop ( gameBoard ) {
        this.shapes[this.shapeIndex].shape.forEach( el => {
            const y = el[0] + this.y;
            const x = el[1] + this.x;

            if (gameBoard.state[y][x]) {
                return false
            }

            gameBoard.state[y][x] = this.class;
        })

        return true
    }
}


export { Block }