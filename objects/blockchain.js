var BaseObject = require('./base');
var Block = require('./block');

function BlockChainException(message) {
    this.name = 'BlockChainException';
    this.message = message;
}

// Make sure return type is BlockChain
function BlockChain(head) {
    BaseObject.call(this);

    // 1st block in the chain could be the only empty block.
    // TODO:
    // Find a better solution
    // Make sure the type of head is always an non-empty immutable block
    this.head = new Block();
}

BlockChain.prototype = Object.create(BaseObject);
BlockChain.prototype.constructor = BlockChain;

BlockChain.prototype.addToChain = function(block) {

    if (block instanceof Block) {
        // If this.head is undefined current block will point to undefined and will become first
        // immutable block in the chain.
        // If this.head is some block than block gets updated with this.head and becomes immutable
        // which then gets added to chain.
        this.head = block.chain(this.head);
    } else {
        // Not able to get exact type: typeof can be used but is not informative enough
        // in case of objects.
        throw new BlockChainException('Expected type Block as a parameter, found something else!'); 
    }
}

// Do not allow to add more or delete available properties.
BlockChain = Object.seal(BlockChain);

module.exports = BlockChain;
