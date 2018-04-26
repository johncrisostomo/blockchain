const Block = require('../Block');

describe('Block', () => {
    let data;
    let previousData;
    let block;

    beforeEach(() => {
        data = 'dunno';
        previousBlock = Block.genesis();
        block = Block.mineBlock(previousBlock, data);
    });

    it('sets `data` to equal input', () => {
        expect(block.data).toEqual(data);
    });

    it('sets `previousHash` to equal previous block', () => {
        expect(block.previousHash).toEqual(previousBlock.hash);
    });
});
