const Block = require('./block');

const b = Block.mineBlock(Block.genesis(), 'b');
console.log(b.toString());
