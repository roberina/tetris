import { Block } from "./Block.js";

class ZBlock extends Block {

    shapes = [
        {
            'height': 2,
            'width': 3,
            'shape': [[0, 0], [0,1], [1, 1], [1, 2]]
        }
    ];

    class = 'z-block';
}


export { ZBlock }