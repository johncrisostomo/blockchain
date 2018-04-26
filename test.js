const Block = require('./block');

const block = new Block(Date.now(), 'previous', 'current', 'data?');
console.log(block.toString());
console.log(Block.genesis().toString());
