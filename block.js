const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(timestamp, previousHash, currentHash, data) {
        this.timestamp = timestamp;
        this.previousHash = previousHash;
        this.currentHash = currentHash;
        this.data = data;
    }

    static genesis() {
        return new this(
            Date.now(),
            '1dd994f61ee12cf8140f146d193041fc07d1efe7aebd259ed5bdac4e873d96b3',
            '2c521b0e01c6c3568e0fa74b623aa1852eabd15bf6425c40884b0092a9067272',
            []
        );
    }

    static hash(timestamp, previousHash, data) {
        return SHA256(`${timestamp}${previousHash}${data}`).toString();
    }

    static mineBlock(previousBlock, data) {
        const timestamp = Date.now();
        const previousHash = previousBlock.hash;
        const hash = Block.hash(timestamp, previousHash, data);

        return new this(timestamp, previousHash, hash, data);
    }

    toString() {
        return `Block - 
            Timestamp: ${this.timestamp}
            Last Hash: ${this.previousHash.substring(0, 10)}
            Hash     : ${this.currentHash.substring(0, 10)}
            Data     : ${this.data}`;
    }
}

module.exports = Block;
