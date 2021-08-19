// Object Block is an intermittent object which must be extended as per the use case and
// not implemented directly.
var BaseObject = require('./base');
var TR = require('./transaction');
var Transaction = TR.Transaction;

function BlockException(message) {
    this.name = 'BlockException';
    this.message = message;
}

function Block() {
    BaseObject.call(this);

    this.transactions = Array();
    this.previous = undefined;
    this.hash = undefined;
    this.number = 0;
}

Block.prototype = Object.create(BaseObject.prototype);
Block.prototype.constructor = Block;

// Chain the current block with last block
Block.prototype.chain = function(block, number) {
    if (block instanceof Block) {
        this.previous = block;
        this.number = number;
        return this.makeImmutable();
    } else {
        // Not able to get exact type: typeof can be used but is not informative enough
        // in case of objects.
        throw new BlockException('Expected type Block as a parameter, found something else!');
    }
}

// Add transaction to current block
Block.prototype.addTransaction = function(transaction) {
    if (transaction instanceof Transaction) {
        this.transactions.push(transaction);
    } else {
        throw new BlockException('Expected type Transaction as a parameter, found something else!');
    }
}

Block.prototype.makeImmutable = function() {
    this.generateHash();
    return Object.freeze(this);
}

// Generates a hash for the block to be called at the time of block to be added to chain
Block.prototype.generateHash = function() {
    // Some SHA implementation which is unique for each of the block
    this.hash = '__hash__';
}

module.exports = Block;
