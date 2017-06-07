var BaseObject = require('./base');

function BlockException(message) {
    this.name = 'BlockException';
    this.message = message;
}

function Block() {
    BaseObject.call(this);
    
    this.previous = undefined;
}

Block.prototype = Object.create(BaseObject.prototype);
Block.prototype.constructor = Block;

Block.prototype.addToChain = function(block) {
    if (block instanceof Block) {
        this.previous = block;
    } else {
        // Not able to exact type: typeof can be used but is not informative enough
        // in case of objects.
        throw new BlockException('Expected of type Block, found something else!'); 
    }
}

module.exports = Block;
