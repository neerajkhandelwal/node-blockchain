var Block = require('./block');

function ImmutableBlockException(message) {
    this.name = 'ImmutableBlockException';
    this.message = message;
}

// TODO: Make sure returned object is ImmutableBlock
function ImmutableBlock(block) {
    if (block instanceof Block) {
        return function(block) {
            // Transactions cannot be empty
            if (block.transactions.length == 0) {
                throw new ImmutableBlockException('Number of transactions are 0 in the block');
            }

            // Hash has to be implemented
            if (block.hash === undefined) {
                // Other checks for valid type of hash
                throw new ImmutableBlockException('Invalid block hash');
            }

            this.transactions = block.transactions;
            this.previous = block.previous;
            this.hash = block.hash;

            // Nothing can be changed in already sealed ImmutableBlock after this point
            immutableBlock = Object.freeze(this);
            return immutableBlock;
        }(block);
    }
    
    throw new ImmutableBlockException('Expected type Block as param, found something else!');
}

// Nothing can be added or deleted from ImmutableBlock after this point
ImmutableBlock = Object.seal(ImmutableBlock);

module.exports = ImmutableBlock;
