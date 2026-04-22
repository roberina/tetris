import { Block } from "./Block.js";

class SBlock extends Block {


    shapes = [
        {
            'height': 2,
            'width': 3,
            'shape': [[0, 1], [0,2], [1, 0], [1, 1]]
        }
    ];

    class = 's-block';
}


export { SBlock }