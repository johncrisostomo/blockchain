class Block {
    constructor(timestamp, previousHash, currentHash, data) {
        this.timestamp = timestamp;
        this.previousHash = previousHash;
        this.currentHash = currentHash;
        this.data = data;
    }

    toString() {
        return `Block - 
            Timestamp: ${this.timestamp}
            Last Hash: ${this.lastHash.substring(0, 10)}
            Hash     : ${this.hash.substring(0, 10)}
            Data     : ${this.data}`;
    }
}

module.exports = Block;
