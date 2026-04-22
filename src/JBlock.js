import { Block } from "./Block.js";

class JBlock extends Block {

    shapes = [
        {
            'height': 3,
            'width': 2,
            'shape': [[0, 1], [1, 1], [2, 0], [2, 1]]
        },
        {
            'height': 2,
            'width': 3,
            'shape': [[0, 0], [1, 0], [1, 1], [1, 2]]
        },
        {
            'height': 3,
            'width': 2,
            'shape': [[0, 0], [0, 1], [1, 0], [2, 0]]
        },
        {
            'height': 2,
            'width': 3,
            'shape': [[0, 0], [0, 1], [0, 2], [1, 2]]
        },
    ];

    class = 'j-block';

    constructor(gb) {

        super();

        this.y = 0 - this.shapes[0].height;
        this.x = Math.floor((gb.width - this.shapes[0].width) / 2);

    }

}

export { JBlock }