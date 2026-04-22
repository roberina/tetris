import { Block } from "./Block.js";

class IBlock extends Block {

    shapes = [
        {
            'height': 4,
            'width': 1,
            'shape': [[0, 0], [1, 0], [2, 0], [3, 0]]
        },
        {
            'height': 1,
            'width': 4,
            'shape': [[0, 0], [0, 1], [0, 2], [0, 3]]
        },
    ];

    class = 'i-block';

    constructor(gb) {

        super();

        this.y = 0 - this.shapes[0].height;
        this.x = Math.floor((gb.width - this.shapes[0].width) / 2);

    }

}

export { IBlock }