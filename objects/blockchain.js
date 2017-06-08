var BaseObject = require('./base');
var ImmutableBlock = require('./immutableBlock');

function BlockChainException(message) {
    this.name = 'BlockChainException';
    this.message = message;
}

// Make sure return type is BlockChain
function BlockChain(head) {
    BaseObject.call(this);

    return function(head) {
       this.head = head;
       return Object.freeze(this);
    }(head);
}

BlockChain.prototype = Object.create(BaseObject);
BlockChain.prototype.constructor = BlockChain;

BlockChain.prototype.addToChain = function(block) {

    if (block instanceof Block) {
        // If this.head is undefined current block will point to undefined and will become first
        // immutable block in the chain.
        // If this.head is some block than block gets updated with this.head and becomes immutable
        // which then gets added to chain.
        block.chain(this.head);
        var immutableBlock = ImmutableBlock(block);
        return new BlockChain(immutableBlock);
    } else {
        // Not able to get exact type: typeof can be used but is not informative enough
        // in case of objects.
        throw new BlockChainException('Expected type Block as a parameter, found something else!'); 
    }
}

BlockChain = Object.seal(BlockChain);
BlockChain = Object.preventExtensions(BlockChain);


module.exports = BlockChain;
