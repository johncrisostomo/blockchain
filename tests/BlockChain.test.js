const BlockChain = require('../BlockChain');
const Block = require('../Block');

describe('Blockchain', () => {
    let blockchain;
    let genesis;

    beforeEach(() => {
        blockchain = new BlockChain();
        genesis = Block.genesis();
    });

    it('should start with the genesis', () => {
        expect(blockchain.chain[0]).toEqual(genesis);
    });

    it('should add a new block', () => {
        const data = 'test';

        blockchain.addBlock(data);
        const previousBlock = blockchain.chain[blockchain.chain.length - 1];

        expect(previousBlock.data).toEqual(data);
    });
});
